//地图大小
var map={
	width:900,
	height:500
};
var box={
	width:25,
	height:25
};
//格子个数
var boxNums={
	wNums:map.width/box.width,
	hNums:map.height/box.height,
	nums:0
};
boxNums.nums=boxNums.wNums*boxNums.hNums;
//格子大小
//蛇的身体
var snake=[];
//其他部分
var other=[];
//周期
var period=200;
//蛇头朝向,默认向右
//0 L;1 U;2 R;3 D
var dir=2;
//页面加载完成后立即执行，即最先执行的程序
window.onload=function(){
	mapInit();
	createFood();
}

function start(){
	//周期调用函数：每隔400ms调用一次snakeMove
	setInterval(snakeMove,period);
	//按键松开时触发事件，按照所按键改变朝向，不能向后
	document.onkeyup=function(e){
		for(var i=0;i<4;i++){
			if(e.keyCode==i+37&&dir!=(i+2)%4){
				dir=i;break;
			}
		}
	}
}
function stop(){
	window.location.href=window.location.href;
}
//地图初始化
function mapInit(){
	//获取id名为“map”的块元素，并赋予样式长宽
	var map_target=document.getElementById("map");
	map_target.style.width=map.width+"px";
	map_target.style.height=map.height+"px";
	var newSpan=null;
	for(var i=1;i<=boxNums.nums;i++){
		//创造方块，并赋予样式
		newSpan=document.createElement("span");
		newSpan.style.width=box.width+"px";
		newSpan.style.height=box.height+"px";
		newSpan.id=i;
		//appendChild():往元素中添加新元素
		map_target.appendChild(newSpan);
		//蛇的位置初始化
		if(i<=5){
			newSpan.className="snake";
			snake.push(newSpan);
		}
		else {
			other.push(newSpan);
		}
		//push():往数组的最后添加元素
	}
}
//随机产生一个食物
function createFood(){
	//Math.floor()向下取整，Math.random()取0～1之间的随机数，other.length:other数组的长度
	var x=Math.floor(Math.random()*other.length);
	other[x].className="food";
}
//蛇移动
function snakeMove(){
	//蛇头的id
	var headId=parseInt(snake[snake.length-1].id);
	//按照当前朝向向前移动一步
	switch(dir){
		case 0:
			headId--;
			if(headId%boxNums.wNums==0)headId+=boxNums.wNums;
			break;

		case 1:
			headId-=boxNums.wNums;
			if(headId<=0)headId+=boxNums.nums;
			break;
		case 2:
			headId++;
			if(headId%boxNums.wNums==1)headId-=boxNums.wNums;
			break;
		case 3:
			headId+=boxNums.wNums;
			if(headId>=boxNums.nums)headId-=boxNums.nums;
			break;
		default:break;
	}
	//找到下一步元素的Id
	var newHead=document.getElementById(headId);
	//如果吃到了蛇身
	for(var i=1;i<snake.length;i++)
		if(headId==snake[i].id){
			alert("Game Over!");
			//重新跳到当前页面，即刷新
			window.location.href=window.location.href;
		}
	//找到新蛇头在other中的位置
	var index;
	for(var i=1;i<other.length;i++)
		if(other[i].id==headId){
			index=i;
			break;
		}
	//删除other中的新蛇头
	other.splice(index,1);
	snake.push(newHead);
	if(newHead.className=="food"){
		//如果吃到了食物，蛇长度加一，并随机显示新食物
		createFood();
	}
	else {
		//否则删除原先蛇尾的元素
		snake[0].className="";
		other.push(snake.shift());
	}
	newHead.className="snake";
}