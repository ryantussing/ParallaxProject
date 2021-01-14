window.addEventListener("scroll", function() {
    var distance = window.scrollY;
    this.document.getElementById("mntbck").style.transform = `scaleX(${distance *1}); scaleY(${distance * 1});`;
    this.console.log(distance);
});
