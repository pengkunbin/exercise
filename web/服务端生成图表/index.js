const echarts = require('echarts');
const { createCanvas } = require('canvas');
const fs = require("fs");

const canvas = createCanvas(800, 600);
// ECharts 可以直接使用 node-canvas 创建的 Canvas 实例作为容器
let chart = echarts.init(canvas);

const option = {
  xAxis: {
    show: false,
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Sun1', 'Sun2', 'Sun3', 'Sun4', 'Sun5']
  },
  yAxis: {
    show: false,
    type: 'value'
  },
  series: [
    {
      data: [820, 830, 840, 922, 982, 962, 962, 952, 942, 932, 901, 820],
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbol: "circle", // 这个把节点的空心圆换成实心圆
      lineStyle:{
        width: 8,
        color: '#3D67FF',
        cap: 'round',
      },
      areaStyle: {
        color: '#dae6fd'
      }
    },
  ]
};

// 像正常使用一样 setOption
chart.setOption(option);

const buffer = canvas.toBuffer('image/png');

fs.writeFile('./example.png', buffer, ()=>{});

//TODO: 解决图片模糊的问题
