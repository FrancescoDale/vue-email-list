var app = new Vue ({
    el : '#root',
    data : {
        // array di email
        mailList : [],
    },
    methods : {},

    mounted() {
        // attraverso un ciclo andrò a richiamare 10 indirizzi email
        for (var i = 10; i > 0; i--) {
            //richiama le mail da remoto
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),

        }
    }

});
