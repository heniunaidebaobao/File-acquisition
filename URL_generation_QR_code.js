// ==UserScript==
// @name         网址生成二维码
// @version      0.1
// @description  网址生成二维码
// @author       喝牛奶的宝宝
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
	GM_registerMenuCommand('生成二维码',Generate_QR_code);
	function Generate_QR_code(){
		let div = document.createElement("div");
		div.id = 'niunai_QR_code';
		div.style = 'z-index: 9999;position: fixed;';
		document.querySelector("html").prepend(div);
		let img = document.createElement("img");
		img.style = 'height: 330px;width: 330px;';
		img.src = 'https://api.pwmqr.com/qrcode/create/?url=' + window.document.location.href;
		img.crossOrigin = 'anonymous';
		div.append(img);
		div.onclick = function(){
			div.remove();
		}
	}
})();
