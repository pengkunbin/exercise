const echarts = require('echarts');
const { createCanvas } = require('canvas');
const fs = require("fs");
const jimp = require('jimp');

const canvas = createCanvas(1000, 300);
// ECharts 可以直接使用 node-canvas 创建的 Canvas 实例作为容器
let chart = echarts.init(canvas);

const option = {
  xAxis: {
    show: false,
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    show: false,
    type: 'value',
    min: 200,
  },
  series: [
    {
      data: [220, 230, 252, 262, 252, 230, 220],
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle:{
        width: 8,
        color: '#3D67FF',
        cap: 'round',
      },
      // areaStyle: {
      //   color: '#dae6fd'
      // }
    },
  ]
};

// 像正常使用一样 setOption
chart.setOption(option);

const buffer = canvas.toBuffer('image/png');

fs.writeFileSync('./example.png', buffer);
jimp.read("./example.png").then((image)=>{
  image.autocrop().writeAsync('./example_autoCrop.png');
});
//TODO: 解决图片模糊的问题
