window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    this.document.getElementById("mntbck").style.transform = `scaleX(${distance *1}); scaleY(${distance * 1});`;
    console.log(distance);
});
