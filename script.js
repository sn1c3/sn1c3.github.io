var body = document.querySelector("body");

checkWidth();

window.addEventListener('resize', function () {
    checkWidth();
});

function checkWidth() {
    if (window.innerWidth < 576) {
        body.style.paddingTop = "56px";
    } else {
        body.style.paddingTop = "136px";
    }
}