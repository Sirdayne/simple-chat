"use strict"

$(document).ready(function() {
    $('#textarea').fadeOut(10).prop("disabled", false);
    
    var indexUser = 0;
    
    function Chat() {
        
        var self = this;
        
        function companionAnswers() {
            
            companionTypes(indexUser);
            
            window.setTimeout(function(){
                $('.chat-messages').append(`
                    <div class="chat-message" style="display:block;">
                        <div class="message-txt message-companion">`+"Привет, как дела?"+`
                            <div class="message-time">
                                <div class="msg-time">12:00</div>
                            </div>
                        </div>
                    </div>
                `);
                
                companionTypesEnded(indexUser);
                scrollBottomChat(500);
                notification(indexUser);
                
            }, 1500);
        }
        
        function scrollBottomChat(timeToScroll) {
            $('.chat-messages').animate({ scrollTop: $('.chat-messages').prop('scrollHeight')}, timeToScroll);
        }
        
        function companionTypes(indexCompanion) {
            $('.user').eq(indexCompanion).addClass('types-active');
        }
        
        function companionTypesEnded(indexCompanion) {
            $('.user').eq(indexCompanion).removeClass('types-active');
        }
        
        function notification(indexCompanion) {
            $('.user').eq(indexCompanion).addClass('user-got-msg');
            var urlAvatar = $('.user').eq(indexCompanion).find('img').attr('src');
            
              Notification.requestPermission(function(permission){ 
                var notification=new Notification('Simple chat',{
                  body:'New message',
                  icon: urlAvatar
                });
                setTimeout(function(){
                  notification.close();
                },2000);
              });
        };

        this.userClicked = function(indexUserClicked) {
            $('.chat-message').hide();
          
            $('.user').removeClass('user-active');
            $('.user-new-msg').eq(indexUserClicked).fadeOut().html();
            $('.user').eq(indexUserClicked).addClass('user-active');

            $('.loading').addClass('active');

            window.setTimeout(function() {
                $('.chat-message').fadeIn(500);
                $('#textarea').show();
                $('.loading').removeClass('active');
            }, 1200);
        };
        
        this.sendMessage = function(message) {
                $('#textarea').val('');
                if (message != ''){
                    $('#textarea').prop("disabled", true);
                    window.setTimeout(function(){
                        $('.chat-messages').append(`
                            <div class="chat-message" style="display:block;">
                                <div class="message-txt">`+message+`
                                    <div class="message-time">
                                        <div class="msg-time">12:00</div>
                                    </div>
                                </div>
                            </div>
                        `);

                        $('#textarea').prop("disabled", false);
                        companionAnswers();
                        scrollBottomChat(1000);
                        
                    }, 1000);
                }
        };
        
        this.companionTypes = function(indexCompanion) {
            $('.user').eq(indexCompanion).addClass('types-active');
            
            var timer = 0;
                window.setInterval(function(){
                        ++timer;
                        var result = timer % 4;
                            if (result == 0){$('.user-types').html('Собеседник печатает')}
                            if (result == 1){$('.user-types').html('Собеседник печатает.')}
                            if (result == 2){$('.user-types').html('Собеседник печатает..')}
                            if (result == 3){$('.user-types').html('Собеседник печатает...')}
                }, 300);
        };
        
        this.companionSended = function(indexCompanion) {
            $('.user').eq(indexCompanion).addClass('user-got-msg');
            var urlAvatar = $('.user').eq(indexCompanion).find('img').attr('src');
            
              Notification.requestPermission(function(permission){ 
                var notification=new Notification('Simple chat',{
                  body:'New message',
                  icon: urlAvatar
                });
                setTimeout(function(){
                  notification.close();
                },2000);
              });
        };
    }
    
    var chat = new Chat();
    
    /* ВЫБРАТЬ СОБЕСЕДНИКА */
    $('.user').click(function() {
        indexUser = $('.user').index(this);
        chat.userClicked(indexUser);
    });
    
    /* ОТПРАВКА СООБЩЕНИЯ */
    $('body').on('focus','#textarea',function(){
        $('#textarea').keydown(function(e) {
            if (e.ctrlKey && e.keyCode == 13) {
                var textareaVal = $('#textarea').val();
                chat.sendMessage(textareaVal);
            }
        });
    });
    
    /* СОБЕСЕДНИКИ ПЕЧАТАЮТ */
    chat.companionTypes(3);
    chat.companionTypes(8);
    
    /* ПОЛУЧЕНО НОВОЕ СООБЩЕНИЕ */
    chat.companionSended(1);
    window.setTimeout(function(){
        chat.companionSended(2);
    }, 1000);
    
});