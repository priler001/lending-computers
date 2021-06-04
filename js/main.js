$(document).ready(function() {
    $('.menu__burger').click(function() {
        $('.menu__burger').toggleClass('open-menu');
        $('.ul-content').toggleClass('open-menu');
    });
});