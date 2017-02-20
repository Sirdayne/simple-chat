
//v-on:click="userClick" 
//v-bind:class="{ 'user-active' : isUserActive }">
var main = new Vue({
    el: '#chat-users',
    data: {
        users: [
                { nick: 'User 1', img: './img/u1.png', isActive: true},
                { nick: 'User 2', img: './img/u2.png', isActive: false},
                { nick: 'User 3', img: './img/u3.png', isActive: false},
                { nick: 'User 4', img: './img/u4.png', isActive: false},
            ],
    },
    
    methods: {
    userClick: function (event) {
            this.isActive = false;
            alert('1');
        }
    }

})

    
