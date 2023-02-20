let menu = document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// sign up
function flip() {
    $('.card').toggleClass('flipped');
} 

// 
$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.main__container').css('background-position', 'left ' + ((scrolledY)) + 'px');
  });
  



