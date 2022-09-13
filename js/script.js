
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

/* revelar a medida que se usa el scroll */

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.main-title, .section-title', {delay: 500, origin: 'right'});
ScrollReveal().reveal('.image', {delay: 600, origin: 'left', interval: 200});
ScrollReveal().reveal('.image1', {delay: 600, origin: 'right', interval: 200});
ScrollReveal().reveal('.text-box', {delay: 700, origin: 'right'});
ScrollReveal().reveal('.text-box1', {delay: 700, origin: 'left'});
/*
ScrollReveal().reveal('.social i', {delay: 500, origin: 'top', interval: 200 });*/

/* Enviar email (Your security token is 2e455071-85f7-4124-ae4b-8ab8823c4b0b Please take note of this.)*/

    function sendEmail() {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "nestorhuircapan25@gmail.com",
            Passworld : "A0BC057421F8E32A5E9A2A09A9A4B01B0409",
            To : "nestorhuircapan25@gmail.com",
            From : document.getElementById("email").value,
            Subject : "nuevo contacto de consulta",
            Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElemenById("email").value
                + "<br> Phone no: " + document.getElemenById("phone").value
                + "<br> Message: " + document.getElemenById("message").value
        }).then(
            message => alert("mensaje enviado con exito")
        );
    }
