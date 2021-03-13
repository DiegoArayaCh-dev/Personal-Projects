function send() {
     var name, phone, email, terms
     name = document.getElementById("name")
     phone = document.getElementById("phone")
     email = document.getElementById("email")
     terms = document.getElementById("terms")
     message = document.getElementById("message")
     var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
     var userHTML = "<div style = 'background-color: #fff; text-align: center;'>"+
    "<img width='200px' height='200px'  style='margin-top: 20px; display: inline;' src='https://hc-tramitologia.netlify.app/img/brand/logo.png'>"+
    "<h1 style= 'color: #BA882C;'>Reciba un cordial saludo " + name.value + "</h1> "+
    "<h3 style= 'color: #9F9F9F;'>Su mensaje ha sido guardado.</h3> "+
    " <p style= 'color: #363636; margin-bottom: 20px;'>Pronto será atendido/a por uno de nuestros colaboradores.</p>"+
    " </div> ";
    var webHTML = "<div style = 'background-color: #fff; text-align: center;'>"+
    "<img width='200px' height='200px'  style='margin-top: 20px; display: inline;' src='https://hc-tramitologia.netlify.app/img/brand/logo.png'>"+
    "<h1 style= 'color: #BA882C;'>Se recibió un mensaje de " + name.value + "</h1> <h2 style = 'color:#9F9F9F'>Mensaje:</h2>"+
    " <p style= 'color: #363636; margin-bottom: 20px;'>"+message.value+"</p>"+
    "<br><h3 style= 'color: #9F9F9F;'>Nombre: "+name.value+"<br>Tel: "+phone.value+"<br>Correo: "+email.value+" </h3>" +
    " </div> ";


     if (name.value.trim() == "") {
         alert("Ingrese su nombre")
         name.focus()
         return
     }
     if (phone.value.trim() == "") {
        alert("Ingrese su número de teléfono")
        phone.focus()
        return
    }
    if (isNaN(phone.value)){
        alert("Ingrese sólo números")
        phone.focus()
        return
    }



    if (email.value.trim() == "") {
        alert("Ingrese su correo electrónico")
        email.focus()
        return
    }
    if (!emailRegex.test(email.value)) {
        email.focus();
        alert("La dirección de correo es incorrecta");
        return;
    }
    if (message.value.trim() =="") {
        message.focus()
        alert("Digite su mensaje")
        return
    }
    if (!terms.checked) {
        alert("Acepte los términos y condiciones para continuar")
        terms.focus()
        return
    }

    
    


    Email.send({
        SecureToken: "3907dd26-7731-4bf3-9ef7-10f99b5e9f40",


        To: email.value,
        From: "ofitramitecr@gmail.com",
        Subject: "Contacto H&C",
        Body: userHTML,

    })

        .then(message => alert("Recibirá un correo pronto"));

        Email.send({
            SecureToken: "3907dd26-7731-4bf3-9ef7-10f99b5e9f40",
    
    
            To: "ofitramitecr@gmail.com",
            From: "ofitramitecr@gmail.com",
            Subject: "Contacto H&C "+email.value,
            Body: webHTML,
    
        })
    
          
        


}