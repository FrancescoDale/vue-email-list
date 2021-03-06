var app = new Vue({
    el : '#root',
    data : {
        // array di email
        mailList : [],
        mailNumber : 10,
    },
    methods : {},

    mounted() {
        //finchè la lunghezza dell'array è minore di 10, un ciclo for effettua la chiamata e inserisce l'elemento nell'array
        for (var i = 0; i < this.mailNumber; i++) {
            // richiamo da remoto una email
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // push nell'array
                this.mailList.push(response.data.response);
            });
        };
    },
});

// dopo molte prove e vari fix ( il classico typo in length), ho scoperto che l'unico modo per far funzionare il tutto era invertire le cdn nell'head nell'html
