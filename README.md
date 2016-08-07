# tip-blackTip-for-mobile
tip 纯js实现黑色小提示，适用于移动端

<!--第一步设定一下rem 值，这里设置的是屏幕宽度的1/20，你也可以根据需求自己调整 或者去掉这段代码-->
(function(){ 
	document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth / 20 + 'px';
})();

<!--开始实现一个 移动端页面的黑色提示框 （msg:要提示的内容， 提示要展示的时间长度）-->
function blackTip(msg, time){

	<!--判断页面是否已经创建过黑色提示框-->
	if(document.getElementById("blackTipSpan")){
		var blackTip = document.getElementById("blackTipSpan");
		blackTip.innerText = msg;
		
	}else{
		<!--如果页面没有发现 id="blackTipSpan" 的<span>标签，则创建一个-->
		var blackTip = document.createElement('span');
		
		<!--创建一个<style>标签，用于存放这个 blackTipSpan 的自定义css动画效果:fadeOut-->
		var animation = document.createElement('style');
		
		<!--动画是 透明度渐变变成0；同时dispaly:none;并且这个过程中向上移动 3个rem单位-->
		animation.innerText = '@-webkit-keyframes fadeOut{100%{opacity:0;-webkit-transform:translateX(-50%) translateY(-100%);}}';
		document.getElementsByTagName('head')[0].appendChild(animation);
		<!--为这个<span> 设置一个id 用于上面的 判断页面是否已经存在blackTip -->
		blackTip.setAttribute('id', 'blackTipSpan');
		blackTip.innerText = msg;
	}
	<!--设置这个 blackTip 除了animation 动画效果外的基础CSS样式-->
	blackTip.style.cssText ="position:fixed;max-width:50%;background:rgba(0,0,0,.9);color:#fff;padding:1rem;opacity:0.8;font-size:0.9rem;border-radius:0.5rem;text-align:center;word-break:break-all;box-shadow:0 0 3rem #333;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);";

	<!--在body中插入这个 已经设置好样式和提示内容的 blackTip: <span id="blackTipSpan"></span>-->
	document.getElementsByTagName('body')[0].appendChild(blackTip);
	
	<!--监听动画结束事件-->
	blackTip.addEventListener('webkitAnimationEnd', function(){
		this.style.display = "none";
	});
	<!--<span> 展示2100毫秒后（也可自定义时间），为blackTip插入一条css样式，让动画 模拟fadeOut的形式隐藏，动画持续时间0.5S -->
	setTimeout(function(){
		blackTip.style.cssText += "-webkit-animation:0.5s fadeOut forwards;";
	}, time||2100);
}
