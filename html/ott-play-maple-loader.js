var host = 'http://ott-play.com';
if (navigator.userAgent.toLowerCase().search(/tizen/) == -1) {
    window.location = host + '/samsung/maple/';
} else {
    (function() {
        var script = document.createElement('SCRIPT');
        script.src  = host+'/js/jq-1.12.4.js?1';
        script.type = 'text/javascript';
        script.onload = function() {
            $(document.body).load(host+'/stbPlayer/stbPlayer_body.html');
            $.getScript(host+'/samsung/tizen/stb.js', function(){
                $.getScript(host+'/stbPlayer/stbPlayer.js');
            });
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    })();
}