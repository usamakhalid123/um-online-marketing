$(window).scroll(function(){
$('nav').toggleClass('scrolled',$(this).scrolltop()>200);
});