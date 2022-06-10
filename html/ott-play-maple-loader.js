var host = 'http://ott-play.com:80/samsung/maple/';
if (navigator.userAgent.toLowerCase().search(/tizen/) > 0) {
    var loader = document.createElement('script');
    loader.type = 'text/javascript';
    loader.async = false;
    loader.src = host + 'loader.js';
    document.head.appendChild(loader)
} else {
    window.location = host
}