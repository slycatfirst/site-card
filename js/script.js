$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__topnav,.header__language,.header__burger').toggleClass('active');
    });
    $('.header__topnav_button').click(function(event){
        $('.header__topnav,.header__language,.header__burger').toggleClass('active');
    });
});