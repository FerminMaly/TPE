"use strict"
function generarCaptcha (){

        let no = "1234567890QWERTYUIOPASDFGHJKLÑZXCVBNM";

        let x = "";

    for (let i = 1; i < 5; i++) {               
        x = x + no[Math.floor (Math.random() * no.length)];
    }
    CaptchaGeneral.captcha.value = x;
}

document.getElementById("generarCaptcha").addEventListener("click", generarCaptcha)


function verificarCaptcha(){
    let captcha = CaptchaGeneral.captcha.value;
    let entrada = document.getElementById ("textoDeEntrada").value;

    if (captcha == entrada){
        alert("Correcto, tu problema fue enviado. En los proximos dias recibiras una respuesta");
    }
    else{ 
        alert("Captcha incorrecto porfavor intentelo nuevamente");
    }

}

document.getElementById("verificarEEnviar").addEventListener("click", verificarCaptcha)
