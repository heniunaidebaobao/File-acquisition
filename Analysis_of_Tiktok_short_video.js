// ==UserScript==
// @name         抖音短视频解析
// @version      1.1
// @description  抖音短视频解析
// @author       喝牛奶的宝宝
// @match        *://www.douyin.com/*
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAIAAAAK8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA7wAAAL8AAAAgAAAAAAAAACAAAADvAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAO8AAAAgAAAAvwAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/BQAQ/woAIP8KACD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAALAAAADvAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8KACD/MgCg/0YA3/9QAP//UAD//1AA//9LAO//LQCQ/woAIP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/OSBw/62Q7//ez///7+/v///////p3///yK///3xA//9QAP//UAD//yMAcP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/4CAgP///////////////////////////////////////////9O///9mIP//UAD//ygAgP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP+ankD///////////////////////////////////////////////////////Tv//9mIP//UAD//x4AX/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/aW0A/+3vz////////////////////////f7f//f8gP/1+2D/9/1///3+3////////////+nf//9mIP//RgDf/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/x4fAP/0+0D//////////////////////97fz/+JjSD/eH0A/7S7AP/w+gD/8foQ/+zuv////////////72f//9QAP//HgBf/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/eH0A//j8kP////////////////+9n///CgAg/wAAAP8AAAD/AAAA/zw/AP/h6gD/8vog////////////9O///1sQ//8yAJ//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/DywD/+f2g////////////9O///1EQ3/8AAAD/AAAA/wAAAP8AAAD/AAAA/2ltAP/w+gD/+/6/////////////fED//zwAv/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/+HqAP/q7aD///////////+ykP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/Hh8A//D6AP/7/r////////////+ccP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//j8kP///////////6eA//9QAP//CgAg/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v////////////6eA//88AL//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/h6gD/9PtQ////////////07///1AA//8yAJ//AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+/6/////////////p4D//zwAv/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/6WsAP/w+gD//f7f////////////fED//1AA//88AL//GQBQ/woAIP8KACD/AAAA//D6AP/7/r////////////+ngP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Wl0A//D6AP/2/GD////////////07///qID//1sQ//9QAP//WxD//zIAn/8AAAD/8PoA//v+v////////////6eA//88AL//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/0toA//D6AP/4/Y////////////////////////////+RYP//MgCf/wAAAP/w+gD/+/6/////////////p4D//zwAv/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8eHwD/0toA//D6AP/4/Y///////////////////////5Fg//8yAJ//AAAA//D6AP/7/r////////////+ngP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8eHwD/0toA//D6AP/z+0D/+/6/////////////kWD//zIAn/8AAAD/8PoA//v+v////////////6eA//88AL//AAAA/wAAAP8UAED/LQCQ/zwAv/9BAM//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8PEAD/eH0A/+HqAP/w+gD/8foQ//L7MP9rXlD/DwAw/wAAAP/w+gD/+/6/////////////p4D//zwAv/8eAGD/ckDf/51v//+9n///nW///1AA//8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/DxAA/zw/AP9aXgD/aW0A/x4fAP8AAAD/AAAA//D6AP/7/r////////////+ngP//jWDv/+nf//////////////////+9n///UAD//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v////////////+nf/////////////////////////////72f//9QAP//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+/6/////////////////////////////////////////////sp/P/zcAr/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//D6AP/7/r//////////////////////////////////+v6v/+PrIP94fQD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v////////////////////////////52ff/8eHwD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+/6///////////////////////+Tf7//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//D6AP/7/r//////////////////so///xQAQP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v/////////////Tv//9WEO//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+v6v//3+3//9/t//t5/f/zcAr/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADvAAAArwAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//D6AP/w+gD/8PoA//D6AP94fQD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAL8AAAAgAAAA7wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADvAAAAIAAAAAAAAAAgAAAAvwAAAO8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAArwAAACAAAAAAgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAE=
// @grant        GM_setClipboard
// @grant        GM_download
// ==/UserScript==

(function() {
    'use strict';
	var href;
	var name;
	//第一个子节点    firstChild
	//最后一个子节点  lastChild
	//下一个兄弟节点  nextSibling
    setInterval(function() {
		Clear_comments_and_recommended_videos();
		let xg_right_grid = document.querySelector("div.swiper-slide-active xg-right-grid") || document.querySelector(".xg-inner-controls.xg-pos > xg-right-grid")
		if(xg_right_grid.lastChild.id != 'niunai'){
			let xg_icon = document.createElement("xg-icon");
			xg_icon.id = 'niunai';
			xg_icon.classList = 'xgplayer-playback-setting';
			xg_icon.style = 'margin-right: 20px;';
			xg_icon.dataset.index = '10';
			xg_icon.dataset.state = 'normal';
			xg_icon.innerHTML = '<div class="xgplayer-setting-playbackRatio" style="font-size: 12px; font-weight: 400;">解析</div><div class="xgplayer-slider xgplayer-box-douyin " style="width: 80px;"><div class="xgplayer-setting-content"><div class="xgplayer-playratio-wrap"><div class="xgplayer-playratio-item to_download" id="to_download">直接下载</div><div class="xgplayer-playratio-item to_copy" id="to_copy">复制链接</div><div class="xgplayer-playratio-item to_open" id="to_open">打开链接</div><div class="xgplayer-playratio-item to_PotPlayer" id="to_PotPlayer">PotPlayer打开</div></div></div></div><div style="position: absolute; z-index: -999; height: 80px; width: 40px; margin-top: -80px;"></div>';
			xg_right_grid.append(xg_icon);
			//鼠标进入下载div
			xg_icon.onmouseover = function(){
				xg_icon.classList = 'xgplayer-playback-setting slide-show';
			};
			//鼠标离开下载div
			xg_icon.onmouseout = function(){
				xg_icon.classList = 'xgplayer-playback-setting';
			};
			
			//绑定下载事件
			xg_icon.firstChild.nextSibling.firstChild.firstChild.firstChild.onclick = function(){
				Get_link_information();
				if(href.src){
					GM_download(href.src,Nameredefinition(name.textContent) + ".mp4");
				}
			}
			
			//绑定复制事件
			xg_icon.firstChild.nextSibling.firstChild.firstChild.firstChild.nextSibling.onclick = function(){
				Get_link_information();
				if(href.src){
					GM_setClipboard(href.src);
					toast('已复制到剪辑板');
				}
			}
			
			//绑定打开事件
			xg_icon.firstChild.nextSibling.firstChild.firstChild.firstChild.nextSibling.nextSibling.onclick = function(){
				Get_link_information();
				if(href.src){
					window.open(href.src, '_blank');
				}
			}
			
			//绑定PotPlayer事件
			xg_icon.firstChild.nextSibling.firstChild.firstChild.lastChild.onclick = function(){
				Get_link_information();
				if(href.src){
					window.open('PotPlayer://' + href.src, '_self');
				}
			}
		}
	},1000);
	
	//获取链接信息
	function Get_link_information(){
		let Image_Text = document.querySelector("div.swiper-slide-active div#video-info-wrap > div.video-info-detail.canSelect > div.account > div.account-card > div") || document.querySelector("div.Hk7Yo3Ed.modal-video-container div#video-info-wrap > div.video-info-detail.canSelect > div.account > div.account-card > div") || document.querySelector("div.pEvjx0zV");
		let Live_broadcast = document.querySelector("div.basicPlayer.oxOnVjsP.p1NP3hYw.xgplayer_autohide.xgplayer.xgplayer-inactive.xgplayer-pc.xgplayer-playing > div.XNmfpct4.fJOjbqAw > div:nth-child(1) > span");
		if(Image_Text || Live_broadcast){
			href = '';
			toast('图文不解析');
		}else{
			href = document.querySelector("div.swiper-slide-active xg-video-container > video > source:nth-child(1)") || document.querySelector("xg-video-container > video > source:nth-child(1)");
			name = document.querySelector("div.swiper-slide-active div.title > div > div span") || document.querySelector("#video-info-wrap > div.video-info-detail.canSelect > div.title > div > div > span > span") || document.querySelector("span.notranslate.new-pmd > span");
		}
	};
	
	//清楚评论跟推荐视频
	function Clear_comments_and_recommended_videos(){
		let comment = document.querySelector("div.leftContainer.w0R6mo9z > div.tMWlo89q") || document.querySelector("div.GfEbfNCJ");
		if(comment){
			comment.remove();
		}
		if(document.querySelector("div.Yja39qrE div.r3zuuG3C")){
			if(document.querySelectorAll("div.Yja39qrE div.r3zuuG3C").length == 2){
				document.querySelector("div.Yja39qrE > div > div:nth-child(4)").remove();
			}else{
				document.querySelector("div.Yja39qrE > div > div.r3zuuG3C").remove();
			}
		}
		if(document.querySelector("div.MjmyJtoV > div.r3zuuG3C")){
			document.querySelector("div.MjmyJtoV > div.r3zuuG3C").remove();
		}
		if(document.querySelector("div.T_foQflM > div > footer")){
			document.querySelector("div.T_foQflM > div > footer").remove();
		}
		if(document.querySelector("div.n9PPTk22")){
			document.querySelector("div.n9PPTk22").remove();
		}
	};
	
	//去除不允许创建文件的字符
	function Nameredefinition(Name){
		let str_i = ['?', '、', '╲', '/', '*', '“', '”', '<', '>', '|','\n',':'];
		for(let i=0;i < str_i.length;i++){
			Name = Name.replace(str_i[i], '')
		}
		Name = Name.replace(' ', '')
		Name = Name.replace('  ', '')
		return Name
	};
	
	//提示
	function toast(msg,duration){
		console.log(msg);
		duration=isNaN(duration)?3000:duration;

		let toastDom = document.createElement('div');

		toastDom.innerHTML = msg;

		//toastDom.style.cssText="width: 60%;min-width: 150px;opacity: 0.7;height: 30px;color: rgb(255, 255, 255);line-height: 30px;text-align: center;border-radius: 5px;position: fixed;top: 40%;left: 20%;z-index: 999999;background: rgb(0, 0, 0);font-size: 12px;";
		toastDom.style.cssText='padding:2px 15px;min-height: 36px;line-height: 36px;text-align: center;transform: translate(-50%);border-radius: 4px;color: rgb(255, 255, 255);position: fixed;top: 50%;left: 50%;z-index: 9999999;background: rgb(0, 0, 0);font-size: 16px;'

		document.body.appendChild(toastDom);

		setTimeout(function() {

			var d = 0.5;

			toastDom.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';

			toastDom.style.opacity = '0';

			setTimeout(function() { document.body.removeChild(toastDom) }, d * 1000);

		}, duration);

    };
})();
