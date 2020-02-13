$(document).ready(function() {
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    // var btn = $('#btn');

    button.on('click', function() {
        modal.addClass('modal_active');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    });

    // для кнопки-прокрутки

    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 300) {
    //       btn.addClass('show');
    //     } else {
    //       btn.removeClass('show');
    //     }
    //   });
      
    //   btn.on('click', function(e) {
    //     e.preventDefault();
    //     $('html, body').animate({scrollTop:0}, '300');
    //   });
    
});