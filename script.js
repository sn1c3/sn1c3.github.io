var body = document.querySelector("body");


window.addEventListener('resize', function(){
    if(window.innerWidth < 576){
        body.style.paddingTop = "56px";
    }else{
        body.style.paddingTop = "136px";
    }
});
