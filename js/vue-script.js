var main = new Vue({
    el: '#vue-chat',
    data: {
        companionNumber: 0,
        newMessage: '',
        messageNumber: 0,
        chatActive: false,
        loadingActive: false,
        textareaDisabled: true,
        
        users: [
                { nick: 'User 1', img: './img/u1.png', isActive: false, isNew: false, isTypes: false},
                { nick: 'User 2', img: './img/u2.png', isActive: false, isNew: true, isTypes: false},
                { nick: 'User 3', img: './img/u3.png', isActive: false, isNew: false, isTypes: true},
                { nick: 'User 4', img: './img/u4.png', isActive: false, isNew: false, isTypes: false},
                { nick: 'User 4', img: './img/u4.png', isActive: false, isNew: false, isTypes: false},
                { nick: 'User 4', img: './img/u4.png', isActive: false, isNew: true, isTypes: false},
                { nick: 'User 4', img: './img/u4.png', isActive: false, isNew: false, isTypes: true}
        ],
        messages: [
                { text: 'Привет!', isCompanion: false},
                { text: 'Привет! Как дела?', isCompanion: true},
                { text: 'Отлично! Как сам?', isCompanion: false},
                { text: 'Искусство понимает под собой естественный интеллект. Апостериори, реальность ментально подрывает здравый смысл. Сомнение, по определению, оспособляет примитивный принцип восприятия. Апостериори, язык образов принимает во внимание бабувизм.', isCompanion: true},
                { text: 'Искусство понимает под собой естественный интеллект. Апостериори, реальность ментально подрывает здравый смысл. Сомнение, по определению, оспособляет примитивный принцип восприятия. Апостериори, язык образов принимает во внимание бабувизм.', isCompanion: false},
                { text: 'Искусство понимает под собой естественный интеллект. Апостериори, реальность ментально подрывает здравый смысл. Сомнение, по определению, оспособляет примитивный принцип восприятия. Апостериори, язык образов принимает во внимание бабувизм.', isCompanion: true}
        ]
    },
    
    methods: {
        newMessage: function(index) {
            this.users[index].isNew = true;
        },
        
        readNewMessage: function(index) {
            this.users[index].isNew = false;
        },
        
        notification: function() {
            
            var self = this;
            
            Notification.requestPermission(function(permission){ 
                
                var notification=new Notification( self.messages[ self.messages.length - 1 ].text ,{
                    body: self.users[self.companionNumber].nick,
                    icon: self.users[self.companionNumber].img
                });
                
                setTimeout(function(){
                    notification.close();
                },2000);
            });
            
        },
        
        companionTypes: function(){
            this.users[this.companionNumber].isTypes = true;
        },
        
        companionTypesEnded: function(){
            this.users[this.companionNumber].isTypes = false;
            
            this.notification();
        },
        
        scrollBottomChat: function(timeToScroll) {
            var scrollElement = $('.chat-inner');
            scrollElement.animate({ scrollTop: scrollElement.prop('scrollHeight')}, timeToScroll);
        },
        
        companionAnswers: function() {
            this.companionTypes();
            var self = this;
            window.setTimeout(function(){
                self.messages.push({
                    text: 'Привет! Как дела?',
                    isCompanion: true
                });
                self.companionTypesEnded();
                self.scrollBottomChat(500);
            }, 1500);
        },
        
        userClick: function(user) {
            var index = this.users.indexOf(user);
            // обнулить предыдущего собеседника
            this.users[this.companionNumber].isActive = false;
            this.users[index].isActive = true;
            // запомнить нового собеседника
            this.companionNumber = index;
            
            this.readNewMessage(this.companionNumber);
            
            this.chatActive = false;
            this.loadingActive = true;
            this.textareaDisabled = true;
            
            var self = this;
            window.setTimeout(function() {
                self.chatActive = true;
                self.loadingActive = false;
                self.textareaDisabled = false;
            }, 1200);
            
        },
        
        addMessage: function() {
            
            this.textareaDisabled = true;
            var self = this;
            
            window.setTimeout(function() {

                var newMessage = self.newMessage.trim();
                if (newMessage) {
                    self.messages.push({
                        text: newMessage,
                        isCompanion: false
                    });
                    self.newMessage = "";
                    self.scrollBottomChat(500);
                    self.companionAnswers();
                    self.textareaDisabled = false;
                }
                
            }, 1000);
                
        }
    }

})