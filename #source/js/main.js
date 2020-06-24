$(document).ready(function(){
    $(".header__burger").click(function(e){
        let outerWidth = $("body").outerWidth();
        $(".header__burger,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");
        let innerWidth = $("body").innerWidth();
        let scrollWidth =  innerWidth - outerWidth;
        if (scrollWidth > 0) {
            $("body").delay(500).css({'padding-right': scrollWidth + 'px'});
        } else {
            $("body").css({'padding-right':  '0px'});
        }
        console.log( scrollWidth);       
    })
});