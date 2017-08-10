//使用rem作为单位
var dw = document.documentElement.clientWidth;
document.documentElement.style.fontSize = 20 * (dw / 375) + "px";
window.onresize = function(){
	var dw = document.documentElement.clientWidth; 

	document.documentElement.style.fontSize = 20 * (dw / 375) + "px";
}
//定义页面垂直方向滑动
var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	mousewheelControl: true,
	loop: true,
	onInit: function(swiper) {
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper);
	}
})
//页面播放音乐
var playbol = true;
var on_off = document.getElementById("switch");
var mimg = on_off.getElementsByTagName("img")[0];
var music = document.getElementById("music");

on_off.onclick = function() {
	if (playbol) {
		clearInterval(on_off.timer);
		mimg.src = "img/music_off.png";
		music.pause();
		playbol = false;
	} else {
		play();
		mimg.src = "img/music_on.png";
		music.play();
		playbol = true;
	}
}
var r = 0;
//音乐播放z轴旋转
function play() {
	on_off.timer = setInterval(function() {
		r += 1;
		on_off.style.webkitTransform = "rotateZ(" + r + "deg)";
		if (r == 360) {
			r = 0;
		}
	}, 1);
}
play();
//末页视频链接
/*
var v = document.getElementById("video");
v.addEventListener("touchstart",function(){
	location.href = "http://player.youku.com/player.php/Type/Folder/Fid/19778724/Ob/1/sid/XOTA4NzM1MTgw/v.swf"
},false)*/