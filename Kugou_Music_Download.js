// ==UserScript==
// @name         酷狗音乐下载
// @namespace    http://tampermonkey.net/
// @version      2024-03-15
// @description  酷狗音乐下载
// @author       喝牛奶的宝宝
// @match        *://*.kugou.com/*
// @icon         data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADkhB4A5IQeWuSEHtjkhB7/5IQe/+SEHv/khB7/5IQe/+SEHv/khB7/5IQe/+SEHv/khB7/5IQe2OSEHlvkhB4A5IQeW+SEHv/khB7/5IQe/+SEHv/khB7Y5IQeh+SEHlvkhB5b5IQehuSEHtXkhB7/5IQe/+SEHv/khB7/5IQeW+SEHtXkhB7/5IQe/+SEHu/khB5c5IQeR+SEHqPkhB7R5IQe0uSEHqTkhB5H5IQeW+SEHu3khB7/5IQe/+SEHtTkhB775IQe/+SEHvTkhB455IQeqOSEHv/khB7/5IQe/+SEHv/khB7/5IQe/+SEHqzkhB445IQe8OSEHv/khB775IQe/+SEHv/khB5e5IQep+SEHv/khB7S5IQe2+SEHv/khB775IQezOSEHs/khB7/5IQeq+SEHlfkhB7/5IQe/+SEHv/khB7Y5IQeROSEHv/khB7/5IQeMeSEHjvkhB7/5IQeguSEHgDkhB6D5IQe/+SEHv/khB5G5IQe2OSEHv/khB7/5IQeiuSEHp/khB7/5IQe/+SEHknkhB4h5IQezeSEHgXkhB5I5IQe/eSEHv/khB7/5IQepOSEHorkhB7/5IQe/+SEHmLkhB7L5IQe/+SEHv/khB5j5IQeBuSEHjjkhB4V5IQe6+SEHv/khB7/5IQe/+SEHs7khB5j5IQe/+SEHv/khB5i5IQeyuSEHv/khB7/5IQefuSEHgDkhB4X5IQeHeSEHu7khB7/5IQe/+SEHv/khB7N5IQeZOSEHv/khB7/5IQejuSEHp7khB7/5IQe/+SEHpbkhB4A5IQeouSEHhbkhB4x5IQe7OSEHv/khB7/5IQep+SEHorkhB7/5IQe/+SEHtzkhB5C5IQe/+SEHv/khB6u5IQeAOSEHrTkhB7W5IQeGeSEHjDkhB7q5IQe/+SEHkfkhB7Z5IQe/+SEHv/khB7/5IQeY+SEHqXkhB7/5IQe8+SEHszkhB7t5IQe/+SEHunkhB7M5IQe5eSEHqrkhB5d5IQe/+SEHv/khB775IQe/+SEHvDkhB455IQep+SEHv/khB7/5IQe/+SEHv/khB7/5IQe/+SEHqrkhB455IQe8OSEHv/khB765IQe1OSEHv/khB7/5IQe8OSEHl/khB5H5IQeouSEHtDkhB7Q5IQeouSEHkvkhB5b5IQe7+SEHv/khB7/5IQe0+SEHlnkhB7/5IQe/+SEHv/khB7/5IQe2OSEHobkhB5e5IQeXOSEHojkhB7Y5IQe/+SEHv/khB7/5IQe/+SEHlnkhB4A5IQeWuSEHtbkhB7+5IQe/+SEHv/khB7/5IQe/+SEHv/khB7/5IQe/+SEHv/khB7+5IQe1uSEHlrkhB4AgAEAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAACAAAAAgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAA==
// @grant        GM_download
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() {
        //https://www.kugou.com/
        //改编酷狗歌曲内上方的下载酷狗
        if(document.querySelector("#_downloadhome > a").textContent == '下载酷狗'){
            //清除下载提示
            document.querySelector("body > div.ui-popup.ui-popup-show.ui-popup-focus").remove();
            document.querySelector("#_downloadhome > a").textContent = '牛奶改编';
            //绑定下方下载事件
            document.querySelector("#pb_download").onclick = function aaa(){
                console.log(Nameredefinition(document.querySelector("body > div.mainPage > div.content > div.singerContent.clearfix > div.songContent.fl > div.songName.clearfix > span").textContent));
                console.log(document.querySelector("#myAudio").src);
                GM_download(document.querySelector("#myAudio").src,Nameredefinition(document.querySelector("body > div.mainPage > div.content > div.singerContent.clearfix > div.songContent.fl > div.songName.clearfix > span").textContent));
            };
            //绑定下方左侧下载事件
            document.querySelector("body > div.mainPage > div.content > div.singerContent.clearfix > div.album.fl > div.btnArea2.clearfix > a.btnDownloadClient").onclick =function(){
                console.log(Nameredefinition(document.querySelector("body > div.mainPage > div.content > div.singerContent.clearfix > div.songContent.fl > div.songName.clearfix > span").textContent));
                console.log(document.querySelector("#myAudio").src);
                GM_download(document.querySelector("#myAudio").src,Nameredefinition(document.querySelector("body > div.mainPage > div.content > div.singerContent.clearfix > div.songContent.fl > div.songName.clearfix > span").textContent));
            };
        };
        //http://web.kugou.com/
        //没写呢
    },1000);
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
})();