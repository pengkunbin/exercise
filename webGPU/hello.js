///<reference path="./webgpu.d.ts" />
var Drawing2D = /** @class */ (function () {
    function Drawing2D(name) {
        this.canvas = document.getElementById(name);
        this.rect = this.canvas.getBoundingClientRect();
        this.makeDevice();
        this.makePipeline();
        this.makeBuffer();
    }
    Drawing2D.prototype.makeDevice = function () {
        this.gpu = this.canvas.getContext("webgpu");
    };
    Drawing2D.prototype.makePipeline = function () {
        var library = this.gpu.createLibrary(document.getElementById("library").innerText);
        var vertexFunction = library.functionWithName("vertex_main");
        var fragmentFunction = library.functionWithName("fragment_main");
        var pipelineDescriptor = new WebGPURenderPipelineDescriptor();
        pipelineDescriptor.vertexFunction = vertexFunction;
        pipelineDescriptor.fragmentFunction = fragmentFunction;
        pipelineDescriptor.colorAttachments[0].pixelFormat = 80 /* BGRA8Unorm */;
        this.renderPipelineState = this.gpu.createRenderPipelineState(pipelineDescriptor);
        this.commandQueue = this.gpu.createCommandQueue();
    };
    Drawing2D.prototype.makeBuffer = function () {
        var vertexData = new Float32Array([0.0, 0.5, 0, 1, 1, 0, 0, 1,
            -0.5, -0.5, 0, 1, 0, 1, 0, 1,
            0.5, -0.5, 0, 1, 0, 0, 1, 1
        ]);
        this.vertexBuffer = this.gpu.createBuffer(vertexData);
    };
    Drawing2D.prototype.redraw = function () {
        var drawable = this.gpu.nextDrawable();
        var renderPassDescriptor = new WebGPURenderPassDescriptor();
        renderPassDescriptor.colorAttachments[0].texture = drawable.texture;
        renderPassDescriptor.colorAttachments[0].loadAction = 2 /* clear */;
        renderPassDescriptor.colorAttachments[0].storeAction = 1 /* store */;
        renderPassDescriptor.colorAttachments[0].clearColor = [0.35, 0.65, 0.85, 1.0];
        var commandBuffer = this.commandQueue.createCommandBuffer();
        var commandEncoder = commandBuffer.createRenderCommandEncoderWithDescriptor(renderPassDescriptor);
        commandEncoder.setRenderPipelineState(this.renderPipelineState);
        commandEncoder.setVertexBuffer(this.vertexBuffer, 0, 0);
        commandEncoder.drawPrimitives(3 /* triangle */, 0, 3);
        commandEncoder.endEncoding();
        commandBuffer.presentDrawable(drawable);
        commandBuffer.commit();
    };
    return Drawing2D;
}());
window.onload = function () {
    var a = new Drawing2D("canvas");
    // a.redraw()
    requestAnimationFrame(function () {
        a.redraw();
    });
};
