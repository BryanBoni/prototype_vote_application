window.onload = function () {
    var currentLocation = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);//console.log(
    var head = document.getElementsByTagName("head")[0];
    console.log(currentLocation);
    onLoad();

    /**
     * <link rel="shortcut icon" href="monImage" type="image/gif">
     * 
     * 
     * <!-- Latest compiled and minified CSS -->
     * <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     * 
     * <!-- Optional theme -->
     * <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
     * 
     * <!-- Latest compiled and minified JavaScript -->
     * <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
     * 
     * <link rel="stylesheet" href="./vue/main.css"/>
     * @returns {undefined}
     */
    function onLoad() {
        var prefixString = "";
        if (currentLocation === "index.html" || currentLocation === null || currentLocation === "")
            prefixString = "./";
        else
            prefixString = "../";

        var linkIcon = document.createElement("link");
        linkIcon.setAttribute("rel", "shortcut icon");
        linkIcon.setAttribute("href", prefixString+"ressources/logo_lyon1-iut_2015-220px.png");
        linkIcon.setAttribute("type", "image/gif");

        var linkBootstrapCss = document.createElement("link");
        linkBootstrapCss.setAttribute("rel", "stylesheet");
        linkBootstrapCss.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");

        var linkBootstrapThemeCss = document.createElement("link");
        linkBootstrapThemeCss.setAttribute("rel", "stylesheet");
        linkBootstrapThemeCss.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css");

        var linkBootstrappJs = document.createElement("script");
        linkBootstrappJs.setAttribute("src", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");

        var linkCss = document.createElement("link");
        linkCss.setAttribute("rel", "stylesheet");
        linkCss.setAttribute("href", prefixString + "vue/main.css");

        /*
         head.appendChild(metaCharset);
         head.appendChild(metaViewport);
         */
        head.appendChild(linkIcon);
        head.appendChild(linkBootstrapCss);
        head.appendChild(linkBootstrapThemeCss);
        head.appendChild(linkBootstrappJs);
        head.appendChild(linkCss);
    }
};