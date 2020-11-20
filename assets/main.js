var app = new Vue({
    el : '#root',
    data : {
        // array di email
        mailList : [],
    },
    methods : {},

    mounted() {

        //finchè la lunghezza dell'array è minore di 10, un ciclo for effettua la chiamata e inserisce l'elemento nell'array
        if (this.mailList.lenght < 10) {
            for (var i = 0; i < 10; i++) {
                
            }

        }


    }


});
