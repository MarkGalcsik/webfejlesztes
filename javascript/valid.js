$(document).ready(function() {
    $("#urlap").validate({

        rules: {
            name: "required",
            
            email: {
                required: true,
                email: true
            },

            password: {
                required: true,
                minlength: 8

            },

            jelszo_meger: {
                equalTo: password
            },

            tel : {
                required: true,
                number: true
            },

            date: {
                required: true,
            },
        },

        messages: {
            name: "Kérjük adja meg a nevét!",

            email: {
                required: "Kérjük adja meg az email címét!",
                email: "Kérjük adjon meg egy valós email címet!"
            },

            password: {
                required: "Kérjük adja meg a jelszavát!",
                minlength: "A jelszó legalább 8 karakter hosszú legyen!"
            },

            jelszo_meger: {
                equalTo: "A két jelszó nem egyezik!"
            },

            tel: {
                required: "Kérjük adja meg a telefonszámát!",
                number: "Kérjük csak számokat adjon meg!"
            },

            date: {
                required: "Kérjük adja meg a születési dátumát!"
            },
    },
  });
});

