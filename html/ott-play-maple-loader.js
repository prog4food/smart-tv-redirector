var host = 'ott-play.com', ott_device = 'samsung/tizen';
var client_can_https;

if (navigator.userAgent.toLowerCase().indexOf('tizen') == -1) {
    // Orsay: грузим по ссылке, они умеют
    window.location = 'http://' + host + '/f/samsung/maple/';
} else {
    // Если вдруг Tizen: подменяем тело приложения, иначе потеряем window.tizen
    (function () {
        function cutProto(_s) { var _i = _s.indexOf('://'); return (_i === -1 ? _s : _s.slice(_i+3)); }
        function lLoader(_mode) {
            if (host) { host = 'http://' + cutProto(host); }
            if (_mode > 0) { client_can_https = (_mode === 2); }
            var scriptTag = document.createElement('script');
            scriptTag.src = host + '/loader/inplace.js?' + Math.random().toString();
            scriptTag.type = 'text/javascript';
            scriptTag.onerror = function (e) {
                console.error(e);
                document.body.innerHTML = '<h3>Error loading: ' + e.target.src + '</h3><br/><pre>Error loading: ' + e.target.src + '</pre>';
            }
            document.head.appendChild(scriptTag);
        };
        try {
            // Check HTTPS connectivity
            var _xhr = new XMLHttpRequest();
            _xhr.open('GET', 'https://s.ottp.eu.org/generate_204', true);
            _xhr.onerror = function () { lLoader(1); };
            _xhr.onreadystatechange = function () { if (_xhr.readyState === 4 && _xhr.status === 204) { lLoader(2); } };
            _xhr.send();
        } catch(e) {
            lLoader(0);
        }
    })();
}
