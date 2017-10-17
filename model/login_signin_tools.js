//document.getElementById("logForm").removeChild(document.getElementById("login"));/*.getElementById("content").*/
document.getElementById("login").setAttribute("class", "col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3");
document.getElementById("signin").setAttribute("class", "hidden-xs hidden-sm hidden-md hidden-lg");

document.getElementById("loginSelector").addEventListener("click", function () {
    document.getElementById("login").setAttribute("class", "col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3");
    document.getElementById("signin").setAttribute("class", "hidden-xs hidden-sm hidden-md hidden-lg");
});

document.getElementById("signinSelector").addEventListener("click", function () {
    document.getElementById("signin").setAttribute("class", "col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3");
    document.getElementById("login").setAttribute("class", "hidden-xs hidden-sm hidden-md hidden-lg");
});