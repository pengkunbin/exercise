///<reference path="./webgpu.d.ts" />
class Drawing2D {
    canvas: HTMLCanvasElement
    rect: ClientRect
    gpu: WebGPURenderingContext
    commandQueue: WebGPUCommandQueue
    renderPipelineState: WebGPURenderPipelineState
    vertexBuffer: WebGPUBuffer
    constructor(name: string) {
        this.canvas = <HTMLCanvasElement>document.getElementById(name)
        this.rect = this.canvas.getBoundingClientRect()
        this.makeDevice()
        this.makePipeline()
        this.makeBuffer()
    }
    makeDevice() {
        this.gpu = this.canvas.getContext("webgpu")
    }

    makePipeline() {
        let library = this.gpu.createLibrary(document.getElementById("library").innerText)
        let vertexFunction = library.functionWithName("vertex_main")
        let fragmentFunction = library.functionWithName("fragment_main")

        let pipelineDescriptor = new WebGPURenderPipelineDescriptor()
        pipelineDescriptor.vertexFunction = vertexFunction
        pipelineDescriptor.fragmentFunction = fragmentFunction
        pipelineDescriptor.colorAttachments[0].pixelFormat = WebGPUPixelFormat.BGRA8Unorm


        this.renderPipelineState = this.gpu.createRenderPipelineState(pipelineDescriptor);
        this.commandQueue = this.gpu.createCommandQueue()
    }
    makeBuffer() {
        const vertexData = new Float32Array(
            [0.0, 0.5, 0, 1, 1, 0, 0, 1,
                -0.5, -0.5, 0, 1, 0, 1, 0, 1,
                0.5, -0.5, 0, 1, 0, 0, 1, 1
            ]
        )
        this.vertexBuffer = this.gpu.createBuffer(vertexData)
    }
    redraw() {
        let drawable = this.gpu.nextDrawable();
        let renderPassDescriptor = new WebGPURenderPassDescriptor();
        renderPassDescriptor.colorAttachments[0].texture = drawable.texture;
        renderPassDescriptor.colorAttachments[0].loadAction = WebGPULoadAction.clear;
        renderPassDescriptor.colorAttachments[0].storeAction = WebGPUStoreAction.store;
        renderPassDescriptor.colorAttachments[0].clearColor = [0.35, 0.65, 0.85, 1.0];


        let commandBuffer = this.commandQueue.createCommandBuffer();

        let commandEncoder = commandBuffer.createRenderCommandEncoderWithDescriptor(renderPassDescriptor)
        commandEncoder.setRenderPipelineState(this.renderPipelineState);
        commandEncoder.setVertexBuffer(this.vertexBuffer, 0, 0)
        commandEncoder.drawPrimitives(WebGPUPrimitiveType.triangle, 0, 3);

        commandEncoder.endEncoding();
        commandBuffer.presentDrawable(drawable);
        commandBuffer.commit();
    }

}


window.onload = () => {
    const a = new Drawing2D("canvas")
    // a.redraw()
    requestAnimationFrame(() => {
        a.redraw()
    })
}