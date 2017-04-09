function blackTip(msg, time, callback) {
    var blackTip,
        icon,
        blackTipStyle,
        text;
    if (document.getElementById('__blackTipSpan__')) {
        blackTip = document.getElementById('__blackTipSpan__');
        icon = blackTip.getElementsByClassName('icon')[0];
    } else {
        blackTip = document.createElement('div');
        icon = document.createElement('span');
        text = document.createElement('span');

        text.className = 'msg';
        blackTipStyle = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(blackTipStyle);
        icon.className = 'icon';
        icon.innerText = '!';
        text.style.display = 'block';
        blackTip.appendChild(icon);
        blackTip.appendChild(text);
        blackTip.id = '__blackTipSpan__';
        icon.style.cssText = 'display:inline-block;height:50px;line-height:50px;width:50px;margin-bottom:10px;text-align:center;border-radius:50%;font-size:30px;color:rgba(7,17,27,0.8);background:#fff';
    }
    blackTip.getElementsByClassName('msg')[0].innerText = msg || '提示信息';

    blackTip.style.cssText = 'z-index:100;position:fixed;min-width:25%;max-width:60%;background:rgba(7,17,27,0.8);color:#fff;padding:16px;font-size:14px;top:30%;left:50%;border-radius:5px;line-height:18px;text-align:center;word-break:break-all;-moz-transform:translateZ(0) translateX(-50%) translateY(-50%);-webkit-transform:translateZ(0) translateX(-50%) translateY(-50%);transform:translateZ(0) translateX(-50%) translateY(-50%);';

    document.getElementsByTagName('body')[0].appendChild(blackTip);

    var timer = setTimeout(function() {
        if (window.jQuery) {
            jQuery(blackTip).stop().fadeOut();
        } else {
            blackTip.style.display = 'none';
        }
        typeof callback === 'function' && callback();
        clearTimeout(timer);
    }, time || 2100);
}