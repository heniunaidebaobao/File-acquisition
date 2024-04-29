// ==UserScript==
// @name         抖音短视频解析
// @version      3.1
// @description  抖音短视频解析
// @author       喝牛奶的宝宝
// @match        *://www.douyin.com/*
// @match        *://live.douyin.com/*
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAIAAAAK8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA7wAAAL8AAAAgAAAAAAAAACAAAADvAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAO8AAAAgAAAAvwAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/BQAQ/woAIP8KACD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAALAAAADvAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8KACD/MgCg/0YA3/9QAP//UAD//1AA//9LAO//LQCQ/woAIP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/OSBw/62Q7//ez///7+/v///////p3///yK///3xA//9QAP//UAD//yMAcP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/4CAgP///////////////////////////////////////////9O///9mIP//UAD//ygAgP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP+ankD///////////////////////////////////////////////////////Tv//9mIP//UAD//x4AX/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/aW0A/+3vz////////////////////////f7f//f8gP/1+2D/9/1///3+3////////////+nf//9mIP//RgDf/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/x4fAP/0+0D//////////////////////97fz/+JjSD/eH0A/7S7AP/w+gD/8foQ/+zuv////////////72f//9QAP//HgBf/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/eH0A//j8kP////////////////+9n///CgAg/wAAAP8AAAD/AAAA/zw/AP/h6gD/8vog////////////9O///1sQ//8yAJ//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/DywD/+f2g////////////9O///1EQ3/8AAAD/AAAA/wAAAP8AAAD/AAAA/2ltAP/w+gD/+/6/////////////fED//zwAv/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/+HqAP/q7aD///////////+ykP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/Hh8A//D6AP/7/r////////////+ccP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//j8kP///////////6eA//9QAP//CgAg/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v////////////6eA//88AL//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/h6gD/9PtQ////////////07///1AA//8yAJ//AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+/6/////////////p4D//zwAv/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/6WsAP/w+gD//f7f////////////fED//1AA//88AL//GQBQ/woAIP8KACD/AAAA//D6AP/7/r////////////+ngP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Wl0A//D6AP/2/GD////////////07///qID//1sQ//9QAP//WxD//zIAn/8AAAD/8PoA//v+v////////////6eA//88AL//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/0toA//D6AP/4/Y////////////////////////////+RYP//MgCf/wAAAP/w+gD/+/6/////////////p4D//zwAv/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8eHwD/0toA//D6AP/4/Y///////////////////////5Fg//8yAJ//AAAA//D6AP/7/r////////////+ngP//PAC//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8eHwD/0toA//D6AP/z+0D/+/6/////////////kWD//zIAn/8AAAD/8PoA//v+v////////////6eA//88AL//AAAA/wAAAP8UAED/LQCQ/zwAv/9BAM//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8PEAD/eH0A/+HqAP/w+gD/8foQ//L7MP9rXlD/DwAw/wAAAP/w+gD/+/6/////////////p4D//zwAv/8eAGD/ckDf/51v//+9n///nW///1AA//8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/DxAA/zw/AP9aXgD/aW0A/x4fAP8AAAD/AAAA//D6AP/7/r////////////+ngP//jWDv/+nf//////////////////+9n///UAD//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v////////////+nf/////////////////////////////72f//9QAP//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+/6/////////////////////////////////////////////sp/P/zcAr/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//D6AP/7/r//////////////////////////////////+v6v/+PrIP94fQD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v////////////////////////////52ff/8eHwD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+/6///////////////////////+Tf7//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//D6AP/7/r//////////////////so///xQAQP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/8PoA//v+v/////////////Tv//9WEO//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/w+gD/+v6v//3+3//9/t//t5/f/zcAr/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADvAAAArwAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//D6AP/w+gD/8PoA//D6AP94fQD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAL8AAAAgAAAA7wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADvAAAAIAAAAAAAAAAgAAAAvwAAAO8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAArwAAACAAAAAAgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAE=
// @grant        GM_setClipboard
// @grant        GM_download
// ==/UserScript==

(function() {
    'use strict';
	var href;
	var name;
    var JSON_SD;
	//第一个子节点    firstChild
	//最后一个子节点  lastChild
	//下一个兄弟节点  nextSibling
    setInterval(function() {
		Clear_comments_and_recommended_videos();
        //判断是否在直播界面
        if(window.location.host == 'live.douyin.com'){
            //再次判断是否有与大家互动一下...
            if(document.querySelector("#island_b69f5 > div > div:nth-child(7) > div > div > ul > div > div > div:nth-child(6)").textContent == '我的订单直播伴侣'){
                if(!document.querySelector("#niunai")){
                    Get_live_streaming_source_JSON()
                    const Order_Partner =document.querySelector("#island_b69f5 > div > div:nth-child(7) > div > div > ul > div > div > div:nth-child(6)")
                    const json_flv = document.createElement("a");
                    json_flv.id = 'niunai';
                    json_flv.href = 'PotPlayer://' + JSON_SD.flv_FULL_HD1;
                    json_flv.classList = 'hY8lWHgA U2MzYNeU c0xESx1F';
                    json_flv.rel = 'noopener noreferrer';
                    json_flv.elementtiming = 'element-timing';
                    json_flv.target = '_self';
                    json_flv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="" viewBox="0 0 24 24" elementtiming="element-timing"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6A2.75 2.75 0 004 8.75v7a2.75 2.75 0 002.75 2.75h7.501c1.5 0 2.72-1.2 2.75-2.693l1.328 1.021c.823.633 2.014.044 2.011-.995l-.022-7.28a1.25 1.25 0 00-1.976-1.014l-1.353.965A2.75 2.75 0 0014.25 6h-7.5zM17 13.916V10.34l1.82-1.299.019 6.287L17 13.916zM15.5 9.91V8.75c0-.69-.56-1.25-1.25-1.25h-7.5c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h7.501c.69 0 1.25-.56 1.25-1.25v-1.413a.766.766 0 01-.002-.053v-4.33l.001-.044z" fill="#fff" fill-opacity="0.5" elementtiming="element-timing"></path></svg><p elementtiming="element-timing">直播源FLV</p>';
                    Order_Partner.append(json_flv);
                    const json_hls = document.createElement("a");
                    json_hls.id = 'niunai';
                    json_hls.href = 'PotPlayer://' + JSON_SD.flv_FULL_HD1;
                    json_hls.classList = 'hY8lWHgA U2MzYNeU c0xESx1F';
                    json_hls.rel = 'noopener noreferrer';
                    json_hls.elementtiming = 'element-timing';
                    json_hls.target = '_self';
                    json_hls.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="" viewBox="0 0 24 24" elementtiming="element-timing"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6A2.75 2.75 0 004 8.75v7a2.75 2.75 0 002.75 2.75h7.501c1.5 0 2.72-1.2 2.75-2.693l1.328 1.021c.823.633 2.014.044 2.011-.995l-.022-7.28a1.25 1.25 0 00-1.976-1.014l-1.353.965A2.75 2.75 0 0014.25 6h-7.5zM17 13.916V10.34l1.82-1.299.019 6.287L17 13.916zM15.5 9.91V8.75c0-.69-.56-1.25-1.25-1.25h-7.5c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h7.501c.69 0 1.25-.56 1.25-1.25v-1.413a.766.766 0 01-.002-.053v-4.33l.001-.044z" fill="#fff" fill-opacity="0.5" elementtiming="element-timing"></path></svg><p elementtiming="element-timing">直播源HLS</p>';
                    Order_Partner.append(json_hls);
                }
            }else{
                return;
            }
        }else{
            let xg_right_grid = document.querySelector("div.swiper-slide-active xg-right-grid") || document.querySelector(".xg-inner-controls.xg-pos > xg-right-grid");
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
        }
	},1000);
    //获取直播源json
    function Get_live_streaming_source_JSON(){
        var url = 'https://live.douyin.com/webcast/room/web/enter/';
        //设置Headers
        var myHeaders = new Headers();
		myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0");
		myHeaders.append("Accept", "*/*");
		myHeaders.append("Host", "live.douyin.com");
		myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Cookie", "ttwid=1%7CeI9swYUZXcGwBVOwJopBotWz32joBnV2DOopU5q3PUU%7C1713935275%7Cf2f9e0077723d15052ea0a818ec4df67ae7a588ffb207c284197649e23e3ae7c; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%2C%22isForcePopClose%22%3A1%7D; passport_csrf_token=151011cea859a27e84ce82de77e4eb35; passport_csrf_token_default=151011cea859a27e84ce82de77e4eb35; bd_ticket_guard_client_web_domain=2; passport_assist_user=CjyimDjeV5Z4VbslOeEYab5ALuTlk3Zl_UtDhXHeW1UgGEexdkcmg8TkMmhIhPopzb5j9K9t-xMIhj-DflQaSgo8WHxryp0QyeU49rpinyBJahBT3ETtuBxICZG5VGeFKLxsURapBBYqjkyIJDaIz50XrA_rLBx2RnzBhkK_EKHAzw0Yia_WVCABIgEDKisvbA%3D%3D; n_mh=-Dx-ThQn9OqGOXUkrCEqc1zzYgH2Z10I0vhr6MZrTdg; sso_uid_tt=37661f0d781bf470e45dc06c975b443c; sso_uid_tt_ss=37661f0d781bf470e45dc06c975b443c; toutiao_sso_user=ed7f5a9f1e367a5d1bb0ff36bd5310f8; toutiao_sso_user_ss=ed7f5a9f1e367a5d1bb0ff36bd5310f8; sid_ucp_sso_v1=1.0.0-KDdiNGNjMzc0ZjdmNDFhYzIzYmJjZDA3NDIxN2FmYmMzYTY3OTY0ZGUKHQix_s267gIQsNaisQYY7zEgDDC97tXXBTgGQPQHGgJsZiIgZWQ3ZjVhOWYxZTM2N2E1ZDFiYjBmZjM2YmQ1MzEwZjg; ssid_ucp_sso_v1=1.0.0-KDdiNGNjMzc0ZjdmNDFhYzIzYmJjZDA3NDIxN2FmYmMzYTY3OTY0ZGUKHQix_s267gIQsNaisQYY7zEgDDC97tXXBTgGQPQHGgJsZiIgZWQ3ZjVhOWYxZTM2N2E1ZDFiYjBmZjM2YmQ1MzEwZjg; passport_auth_status=2c0a886a5e9d06e2cef2401804c5ba37%2C; passport_auth_status_ss=2c0a886a5e9d06e2cef2401804c5ba37%2C; uid_tt=cc5421a7fd282ffe9bf1b2a7bc2e501e; uid_tt_ss=cc5421a7fd282ffe9bf1b2a7bc2e501e; sid_tt=eb23dd5a73c8091599f5c83350ed37ce; sessionid=eb23dd5a73c8091599f5c83350ed37ce; sessionid_ss=eb23dd5a73c8091599f5c83350ed37ce; publish_badge_show_info=%220%2C0%2C0%2C1713941302113%22; LOGIN_STATUS=1; store-region=cn-hl; store-region-src=uid; _bd_ticket_crypt_doamin=2; _bd_ticket_crypt_cookie=f2f6146c1b5cc4e93e0d692e74389367; __security_server_data_status=1; sid_guard=eb23dd5a73c8091599f5c83350ed37ce%7C1713941302%7C5183997%7CSun%2C+23-Jun-2024+06%3A48%3A19+GMT; sid_ucp_v1=1.0.0-KGJkNGU2MzlkZThhMjA3ZjI1N2Q1MzUxYjQyNDA4ZTNkOTBkMjVmNzgKGQix_s267gIQttaisQYY7zEgDDgGQPQHSAQaAmxxIiBlYjIzZGQ1YTczYzgwOTE1OTlmNWM4MzM1MGVkMzdjZQ; ssid_ucp_v1=1.0.0-KGJkNGU2MzlkZThhMjA3ZjI1N2Q1MzUxYjQyNDA4ZTNkOTBkMjVmNzgKGQix_s267gIQttaisQYY7zEgDDgGQPQHSAQaAmxxIiBlYjIzZGQ1YTczYzgwOTE1OTlmNWM4MzM1MGVkMzdjZQ; SEARCH_RESULT_LIST_TYPE=%22single%22; live_use_vvc=%22false%22; xgplayer_user_id=300982409796; my_rd=2; EnhanceDownloadGuide=%220_0_1_1714200020_0_0%22; FOLLOW_RED_POINT_INFO=%221%22; volume_info=%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Afalse%2C%22volume%22%3A0.991%7D; __live_version__=%221.1.1.9930%22; pwa2=%220%7C0%7C3%7C1%22; FOLLOW_NUMBER_YELLOW_POINT_INFO=%22MS4wLjABAAAAxIWNwQXFdh4-bCLDg8UXEfrVZvhjFPF07Tka0RA21QQ%2F1714320000000%2F0%2F0%2F1714309084653%22; download_guide=%223%2F20240424%2F1%22; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A2560%2C%5C%22screen_height%5C%22%3A1440%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A24%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A100%7D%22; strategyABtestKey=%221714357236.82%22; stream_player_status_params=%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A0%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A1%7D%22; home_can_add_dy_2_desktop=%221%22; FOLLOW_LIVE_POINT_INFO=%22MS4wLjABAAAAxIWNwQXFdh4-bCLDg8UXEfrVZvhjFPF07Tka0RA21QQ%2F1714406400000%2F1714357243651%2F1714357236008%2F0%22; __ac_nonce=0662f040f0039744d5597; __ac_signature=_02B4Z6wo00f01EqsvygAAIDD4pdX..LnFQhKjLuAAHSL5a; has_avx2=null; device_web_cpu_core=24; device_web_memory_size=8; csrf_session_id=72ece9addbc9a002c7c3937cbb671241; webcast_leading_last_show_time=1714357266874; webcast_leading_total_show_times=1; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCSW5wbVJxVnVDRExZbFFoTGlLcGZ6R0xaZkNuSGgrNy9uZTRuLzEvUDQ2dXZlczNlSFAvaHJmRXNYRHpIN2VySHJJR1QzL1M3MlB0a3RxN0VLd1cxQm89IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; msToken=spHPl0KLab9TqF4lOcHAO04Xwa1qFAo4L_6rX1cOIoL5gmrIoDztuJX00Hqgbg7VWyohVz8pWk1MhaqWIYnXmrrrhB04B8x8bNI0owA8lRc9s-iQL4Wvuw==; odin_tt=aef66917c87067989b1995bb4807b974276afe8ebfc9b63e03a6cb8cb809b4d62e43d789d1a71583df35156486ccde7f; passport_fe_beating_status=false; IsDouyinActive=false; xg_device_score=7.881142289177053; live_can_add_dy_2_desktop=%220%22");
        //设置
        const requestOptions = {
		   method: 'GET',
		   headers: myHeaders,
		   redirect: 'follow'
		};
        const query = {
            aid:'6383',
            web_rid:window.location.pathname.substring(1, window.location.pathname.length),
            msToken:'-0bR2BJly2GTS0YMs3UToxYvgXzIluX8X1D3EoaP3CN6B-ap3rkWEHlzLnahXKO8NkUnNh__mNis9aQtV1JSmRZRsu8KXPtodhZWA6uXiD1NLv_uV-J4Aw%3D%3D',
            a_bogus:'EXW0%2F58kdEdiDDS655%2FLfY3q6Wl3Y%2F-50tLVMD2fExVrrL39HMO49exouMsvkifjLG%2FlIeEjy4haT3CkrQd70Zw39W4x%2F2Cpmg00t-P2so0j53iJCLgmE0hq-kb3SlF85XNAiOk0y7ICKbi0lIcnmhK4bfebY7Y6i6tr4f%3D%3D'
        }
        url += "?" + queryParse(query);
        fetch(url, requestOptions)
		   .then(response => response.json())
		   .then(json => Processing_fetch_returns_JSON(json))
		   .catch(error => console.log('error', error));
    }
    //解析JSON
    function Processing_fetch_returns_JSON(json){
        console.log(json.data.data[0]);
        console.log('主播: ' + json.data.data[0].title);
        console.log('标题: ' + json.data.data[0].owner.nickname);
        console.log('直播源flv_FULL_HD1: ' + json.data.data[0].stream_url.flv_pull_url.FULL_HD1);
        console.log('直播源flv_SD1: ' + json.data.data[0].stream_url.flv_pull_url.SD1);
        console.log('直播源flv_SD2: ' + json.data.data[0].stream_url.flv_pull_url.SD2);
        console.log('直播源hls_FULL_HD1: ' + json.data.data[0].stream_url.hls_pull_url_map.FULL_HD1);
        console.log('直播源hls_SD1: ' + json.data.data[0].stream_url.hls_pull_url_map.SD1);
        console.log('直播源hls_SD2: ' + json.data.data[0].stream_url.hls_pull_url_map.SD2);
        JSON_SD =
        {
            'anchor':json.data.data[0].title,
            'title': json.data.data[0].owner.nickname,
            'flv_FULL_HD1': json.data.data[0].stream_url.flv_pull_url.FULL_HD1,
            'flv_SD1': json.data.data[0].stream_url.flv_pull_url.SD1,
            'flv_SD2': json.data.data[0].stream_url.flv_pull_url.SD2,
            'hls_FULL_HD1':json.data.data[0].stream_url.hls_pull_url_map.FULL_HD1,
            'hls_SD1':json.data.data[0].stream_url.hls_pull_url_map.SD1,
            'hls_SD2':json.data.data[0].stream_url.hls_pull_url_map.SD2
        }
    }
    //处理query
    function queryParse(query){
        let queryText = "";
        for(let key in query){
            queryText += `${key}=${query[key]}&`;
        }
        return queryText.slice(0,-1);
    }
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
		//清除首页左侧备案
	        if(document.querySelector("#island_da635 > div > div > div > div > div").textContent == '首页推荐关注朋友我的直播放映厅知识游戏二次元音乐美食设置业务合作'){
	            if(document.querySelector("#island_da635 > div > div > div > div > div").nextSibling){
	                document.querySelector("#island_da635 > div > div > div > div > div").nextSibling.remove();
	            }
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
