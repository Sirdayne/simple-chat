"use strict"

$(document).ready(function() {
    
    $('.user').click(function() {
        
        var indexUser = $('.user').index(this);
        $('.user').removeClass('user-active');
        $(this).addClass('user-active');
        $('.chat-message').hide();
        $('.chat-message').fadeIn(500);
        $('#js-textarea').hide();
        $('#js-textarea').fadeIn(500);
        
    });

});