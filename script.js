window.addEventListener("scroll", function() {
    const distance = this.scrollY;
    this.document.getElementById("fstbck1").style.transform = `scale(${(distance/100) * 1});`;
    console.log(distance);
});
