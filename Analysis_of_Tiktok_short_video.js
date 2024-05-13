// ==UserScript==
// @name         抖音短视频解析
// @version      4.2
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
        console.log(window.niunai);
		Clear_comments_and_recommended_videos();
        //判断是否在直播界面
        if(window.location.host == 'live.douyin.com'){
            //再次判断是否有与大家互动一下...
            if(document.querySelector("#island_b69f5 > div > div:nth-child(7) > div > div > ul > div > div > div:nth-child(6)").textContent == '我的订单直播伴侣'){
                if(!document.querySelector("#niunai")){
                    Get_live_streaming_source_JSON()
                    //获取我的订单div
                    const Order_Partner =document.querySelector("#island_b69f5 > div > div:nth-child(7) > div > div > ul > div > div > div:nth-child(6)")
                    //创建A标签
                    const json_flv = document.createElement("a");
                    json_flv.id = 'niunai';
                    //title中文会导致显示的是url编码
                    //json_flv.href = 'PotPlayer://' + JSON_SD.flv_FULL_HD1 + ' /title= "'+ encodeURI(JSON_SD.title) + '"';
                    json_flv.href = 'PotPlayer://' + JSON_SD.flv_FULL_HD1;
                    json_flv.classList = 'hY8lWHgA U2MzYNeU c0xESx1F';
                    json_flv.rel = 'noopener noreferrer';
                    json_flv.elementtiming = 'element-timing';
                    json_flv.target = '_self';
                    json_flv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="" viewBox="0 0 24 24" elementtiming="element-timing"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6A2.75 2.75 0 004 8.75v7a2.75 2.75 0 002.75 2.75h7.501c1.5 0 2.72-1.2 2.75-2.693l1.328 1.021c.823.633 2.014.044 2.011-.995l-.022-7.28a1.25 1.25 0 00-1.976-1.014l-1.353.965A2.75 2.75 0 0014.25 6h-7.5zM17 13.916V10.34l1.82-1.299.019 6.287L17 13.916zM15.5 9.91V8.75c0-.69-.56-1.25-1.25-1.25h-7.5c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h7.501c.69 0 1.25-.56 1.25-1.25v-1.413a.766.766 0 01-.002-.053v-4.33l.001-.044z" fill="#fff" fill-opacity="0.5" elementtiming="element-timing"></path></svg><p elementtiming="element-timing">直播源FLV</p>';
                    Order_Partner.append(json_flv);
                    //创建A标签
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
            }
        }else{
            //首页添加解析按钮
            //个人主页添加解析按钮
            //分享界面首次播放时添加解析按钮
            //分享界面再次播放时添加解析按钮
            Get_link_information();
            let xg_right_grid =
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > xg-controls > xg-inner-controls > xg-right-grid") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > xg-controls > xg-inner-controls > xg-right-grid") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.Q_hSWWeG.danMuPlayerStyle.midControlHigh.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-inactive > xg-controls > xg-inner-controls > xg-right-grid") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.Q_hSWWeG.danMuPlayerStyle.midControlHigh.xgplayer.xgplayer-pc.xgplayer-playing > xg-controls > xg-inner-controls > xg-right-grid");
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
        myHeaders.append("Cookie", "ttwid=1%7CTAYTjF_oxo28jRJVoX6YTGbWS-uUDLxYAoVX7b-E-NA%7C1714836077%7C548e038aa81908b3620f9cbc87fa918a0adf63ce25668be5ac4ded2f3b8e55f7; __live_version__=%221.1.1.9998%22; live_use_vvc=%22false%22; xgplayer_user_id=606955494870; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%2C%22isForcePopClose%22%3A1%7D; bd_ticket_guard_client_web_domain=2; volume_info=%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.5%7D; passport_csrf_token=73121c003437fa6038b71b85c78cca03; passport_csrf_token_default=73121c003437fa6038b71b85c78cca03; passport_assist_user=CjyKrxr3QdNmmgQKGf6ygubRGAWG-f4sWnFKt9FakSAQHT541wV8slYBNRpHrNZFEpbXxgKhkj_xPilmaxoaSgo8HEOeDuiFnsA2yx79_iBhKfI0Q0EzumWYyzlD-R5JoHZXrS8qHchgvXSEW16v4Semz9Rm9op9xDOBSOyIENWz0A0Yia_WVCABIgEDzGm0wA%3D%3D; n_mh=-Dx-ThQn9OqGOXUkrCEqc1zzYgH2Z10I0vhr6MZrTdg; sso_uid_tt=a888022fe57c3a021eb68340c997d584; sso_uid_tt_ss=a888022fe57c3a021eb68340c997d584; toutiao_sso_user=2a782ffe72b979983a169e7b8d44fee9; toutiao_sso_user_ss=2a782ffe72b979983a169e7b8d44fee9; sid_ucp_sso_v1=1.0.0-KDBkMTE0MDBlMmUwMzdkYzMwYTI0MjUzMGE3ZjBjOGM0Yzc5NTM5MzkKHQix_s267gIQ76bZsQYY7zEgDDC97tXXBTgGQPQHGgJsZiIgMmE3ODJmZmU3MmI5Nzk5ODNhMTY5ZTdiOGQ0NGZlZTk; ssid_ucp_sso_v1=1.0.0-KDBkMTE0MDBlMmUwMzdkYzMwYTI0MjUzMGE3ZjBjOGM0Yzc5NTM5MzkKHQix_s267gIQ76bZsQYY7zEgDDC97tXXBTgGQPQHGgJsZiIgMmE3ODJmZmU3MmI5Nzk5ODNhMTY5ZTdiOGQ0NGZlZTk; passport_auth_status=c73879e8075c914d4e17ee2113385348%2C; passport_auth_status_ss=c73879e8075c914d4e17ee2113385348%2C; uid_tt=87c087d2b210b0c9b2613d88e71f5472; uid_tt_ss=87c087d2b210b0c9b2613d88e71f5472; sid_tt=efaa5c8969ab8d9644f198364bb5dde8; sessionid=efaa5c8969ab8d9644f198364bb5dde8; sessionid_ss=efaa5c8969ab8d9644f198364bb5dde8; LOGIN_STATUS=1; store-region=cn-hl; store-region-src=uid; _bd_ticket_crypt_doamin=2; _bd_ticket_crypt_cookie=a02930bc3b57053a542c4c77b4275463; __security_server_data_status=1; sid_guard=efaa5c8969ab8d9644f198364bb5dde8%7C1714836340%7C5183998%7CWed%2C+03-Jul-2024+15%3A25%3A38+GMT; sid_ucp_v1=1.0.0-KGQ1YThlZWE5OTA1MDIxNjNhNzVhMzA1YTkyMTM2NTIwMjdkM2FmN2UKGQix_s267gIQ9KbZsQYY7zEgDDgGQPQHSAQaAmxmIiBlZmFhNWM4OTY5YWI4ZDk2NDRmMTk4MzY0YmI1ZGRlOA; ssid_ucp_v1=1.0.0-KGQ1YThlZWE5OTA1MDIxNjNhNzVhMzA1YTkyMTM2NTIwMjdkM2FmN2UKGQix_s267gIQ9KbZsQYY7zEgDDgGQPQHSAQaAmxmIiBlZmFhNWM4OTY5YWI4ZDk2NDRmMTk4MzY0YmI1ZGRlOA; publish_badge_show_info=%220%2C0%2C0%2C1714836339467%22; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A2560%2C%5C%22screen_height%5C%22%3A1440%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A24%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A200%7D%22; strategyABtestKey=%221714951941.967%22; stream_player_status_params=%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A1%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A1%7D%22; FOLLOW_LIVE_POINT_INFO=%22MS4wLjABAAAAxIWNwQXFdh4-bCLDg8UXEfrVZvhjFPF07Tka0RA21QQ%2F1715011200000%2F1714951944112%2F1714951942259%2F0%22; home_can_add_dy_2_desktop=%221%22; csrf_session_id=83b6aba6cc729c3ea13c4d3107b27adc; __ac_nonce=06638170b00a443f3dba1; __ac_signature=_02B4Z6wo00f016XONHwAAIDADfXcqzeEMxul7jDAAI9U82; has_avx2=null; device_web_cpu_core=24; device_web_memory_size=8; webcast_leading_last_show_time=1714951949450; webcast_leading_total_show_times=1; download_guide=%223%2F20240506%2F0%22; odin_tt=cb259de371ac385367b5ba7a1df17881c61b537072d8a4218dc151ac863dccd2c5b0bf469b12c80e79e454cd37c53875; xg_device_score=7.722585238393556; live_can_add_dy_2_desktop=%221%22; msToken=C9SlK2QsEMBdG6l0oOxLA8yC7TFBz9vIricxDlacVNcgP1lT3aM1ZOwvLpXONDZGuTGxaXBLx25CU3PWnAe1c2zAUPHN6c-Pg94HUdWQyFPDz-iet7h4; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCQ05TR3BOSDR1eUEycVpaVVdQVUFZQXBPMGVvYnNSTktNL3hTV21GOERwNXVjaXBXbWVQbTQwY1d0a29PRWN4NXBTWHRTN2lrWEhJWkc3RDBLOXBCcXM9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; passport_fe_beating_status=true; IsDouyinActive=true");
        //设置
        let requestOptions = {
		   method: 'GET',
		   headers: myHeaders,
		   redirect: 'follow'
		};
        let query = {
            aid:'6383',
            web_rid:window.location.pathname.substring(1, window.location.pathname.length),
            msToken:'XXvjoZ9wbL3_L8zcp0Mtkh4mawI_YgxB53C5m7MLTWhM-xGwdFyfk3kZCXEq_1gm7nnxOV_R5gZTS9sHK5Iti-vUxZVEdYeoehjOsApEz1IcJPxIkGiF',
            a_bogus:'dv8MQ5LvdkINgV6k5WCLfY3q6133YsJT0tLVMD2f-xV5Ag39HMP69exuHghvuhgjLG/lIeyjy4hbO3nhrQ/j81wf7Wwx/2Cpmgv0teepsomes1feejuQnU4Nmkt-Sec25JZ4EKi8o7/aSYumlIHe5Xo4bfebYrtswnuYt9/bHE=='
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
        console.log('主播: ' + json.data.data[0].owner.nickname);
        console.log('标题: ' + json.data.data[0].title);
        console.log('直播源flv_FULL_HD1: ' + json.data.data[0].stream_url.flv_pull_url.FULL_HD1);
        console.log('直播源flv_SD1: ' + json.data.data[0].stream_url.flv_pull_url.SD1);
        console.log('直播源flv_SD2: ' + json.data.data[0].stream_url.flv_pull_url.SD2);
        console.log('直播源hls_FULL_HD1: ' + json.data.data[0].stream_url.hls_pull_url_map.FULL_HD1);
        console.log('直播源hls_SD1: ' + json.data.data[0].stream_url.hls_pull_url_map.SD1);
        console.log('直播源hls_SD2: ' + json.data.data[0].stream_url.hls_pull_url_map.SD2);
        JSON_SD =
        {
            'anchor':json.data.data[0].owner.nickname,
            'title': json.data.data[0].title,
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
		let Image_Text =
            document.querySelector("div.swiper-slide-active div#video-info-wrap > div.video-info-detail.canSelect > div.account > div.account-card > div") ||
            document.querySelector("div.Hk7Yo3Ed.modal-video-container div#video-info-wrap > div.video-info-detail.canSelect > div.account > div.account-card > div") ||
            document.querySelector("div.pEvjx0zV");
		let Live_broadcast = document.querySelector("div.basicPlayer.oxOnVjsP.p1NP3hYw.xgplayer_autohide.xgplayer.xgplayer-inactive.xgplayer-pc.xgplayer-playing > div.XNmfpct4.fJOjbqAw > div:nth-child(1) > span");
		if(Image_Text || Live_broadcast){
			href = '';
			toast('图文不解析');
		}else{
            //首页视频链接           记录5个
            //个人主页视频链接       记录5个
            //分享界面视频链接
			href =
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-pause > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-inactive > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-pause > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-pause > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-inactive > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-pause > xg-video-container > video > source:nth-child(1)") ||
                document.querySelector("div.zS59Q2nW.CwuzSMFj.video-detail-container.newVideoPlayer.isDanmuPlayer.detailNotFullScreen > div > xg-video-container > video > source:nth-child(1)");
			//首页视频名字           记录10个 一类title.notBideoTags 五个   一类title   五个
            //个人主页视频名字       记录10个 一类title.notBideoTags 五个   一类title   五个
            //分享界面视频名字
            name =
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-pause > div > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-inactive > div > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay > div > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > div > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-pause > div > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-pause > div > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-inactive > div > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.replay > div > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > div > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.MAmRCo2m.danMuPlayerStyle.midControlHigh.MediaNotSupportStyle.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-pause > div > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-pause > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-inactive > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-pause > div > #video-info-wrap > div.video-info-detail > div.title > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-pause > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay.xgplayer-inactive > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.replay > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-inactive > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.T8KOH9z5.basePlayerContainer.ZdqmVeNR.danMuPlayerStyle.midControlHigh.modalPlayer.xgplayer.xgplayer-pc.xgplayer-playing.xgplayer-pause > div > #video-info-wrap > div.video-info-detail > div.title.notBideoTags > div > div > span") ||
                document.querySelector("div.leftContainer.gkVJg5wr > div.XYnWH9QO > div > div.x_vgJ3yL.OXg4B4ot.kDzTQY11 > div > h1 > span");
		}
        console.log(name);
        console.log(href);
        console.log('视频名字:' + Nameredefinition(name.textContent));
        if(href.src){
            console.log('视频链接:' + href.src);
        }
	};

	//清除评论跟推荐视频
	function Clear_comments_and_recommended_videos(){
		//清除首页左侧备案
        if(document.querySelector("#island_e62be > div > div > div.juSoeZQJ.YK5O2mtI > div > div:nth-child(1) > div > div > div.EoY455Q_.QQzJ6KOK.pGb3BrAQ.mWFBvfEw.zipjTPpf > a")){
            //清除备案号
            if(document.querySelector("#island_e62be > div > div > div.juSoeZQJ.YK5O2mtI > div > div.MlLk82IS.anFLc8TW")){
                document.querySelector("#island_e62be > div > div > div.juSoeZQJ.YK5O2mtI > div > div.MlLk82IS.anFLc8TW").remove();
            }
        }
        //清除首页跟个人主页相关推荐与合集
        if(document.querySelector("#relatedVideoCard > div > div.Jx52ATjk.hsqXc7Ob.uk7mp9_x.H3KH67U4 > div.Y02J9IDw.RC9hB93S > div:nth-child(3)")){
            document.querySelector("#relatedVideoCard > div > div.Jx52ATjk.hsqXc7Ob.uk7mp9_x.H3KH67U4 > div.Y02J9IDw.RC9hB93S > div:nth-child(3)").remove();
        }
        if(document.querySelector("#relatedVideoCard > div > div.Jx52ATjk.hsqXc7Ob.uk7mp9_x.H3KH67U4 > div.Y02J9IDw.RC9hB93S > div.u1NbR8hz.B3au4_O4.SGvqSRwl")){
            document.querySelector("#relatedVideoCard > div > div.Jx52ATjk.hsqXc7Ob.uk7mp9_x.H3KH67U4 > div.Y02J9IDw.RC9hB93S > div.u1NbR8hz.B3au4_O4.SGvqSRwl").remove();
        }
        //清除分享界面评论
        if(document.querySelector("#douyin-right-container > div:nth-child(2) > div > div.leftContainer.gkVJg5wr > div.KwRNeXA3")){
            document.querySelector("#douyin-right-container > div:nth-child(2) > div > div.leftContainer.gkVJg5wr > div.KwRNeXA3").remove();
        }
        //清除分享界面推荐视频
        if(document.querySelector("#douyin-right-container > div:nth-child(2) > div > div.lferVJ2i > div > div:nth-child(5)")){
            document.querySelector("#douyin-right-container > div:nth-child(2) > div > div.lferVJ2i > div > div:nth-child(5)").remove();
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
