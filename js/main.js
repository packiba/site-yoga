// $(document).ready(function () {
//     $(".header__burger").click(function (e) {
//         let outerWidth = $("body").outerWidth();
//         $(".header__burger,.header__menu").toggleClass("active");
//         $("body").toggleClass("lock");
//         let innerWidth = $("body").innerWidth();
//         let scrollWidth = innerWidth - outerWidth;
//         if (scrollWidth > 0) {
//             $("body").delay(500).css({ 'padding-right': scrollWidth + 'px' });
//         } else {
//             $("body").css({ 'padding-right': '0px' });
//         }
//     })
// });

let body = document.querySelector('body');
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

burger.onclick = function () {
    let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    this.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    if (scrollBarWidth) {
        body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
        body.style.paddingRight = '0px';
    }
}
