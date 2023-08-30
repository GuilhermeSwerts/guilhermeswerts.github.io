const scroolToForm = (e) => {
    document.getElementById("form").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

const validForm = (name, email, msg, phone) => {
    const isEmailValid = validEmail(email)
    const isPhoneValid = validPhone(phone)
    if (!isEmailValid) {
        alert('Email inválido')
    }
    if (!isPhoneValid) {
        alert('Telefone inválido')
    }
    return name !== ''
        && email !== ''
        && msg !== ''
        && phone !== ''
        && isEmailValid
        && isPhoneValid;
}

document.querySelector("form")
    .addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const msg = document.querySelector('textarea[name="comment"]');
    const phone = document.querySelector('input[name="phone"]');
    if (validForm(name.value, email.value, msg.value, phone.value)) {
        let isSend = sendEmail(email.value, name.value, msg.value, phone.value);
        alert(isSend ? 'Email enviado com sucesso!\n Em 24 horas vamos entrar em contato!' : 'Ops...Algo deu erro ao enviar o email.')
    }
}

async function sendEmail(to, name, message, phone) {
    
    let param = {
        name: name,
        to: 'gsctech@hotmail.com',
        replyto: to,
        message: message,
        phone: phone
    };

    const serviceId = 'service_jd43wir';
    const templateID = 'template_5tgkzir';

    emailjs.send(serviceId, templateID, param).then(res => {
        return true;
    }).catch(err => {
        return true;
    });
}

function validPhone(phone) {
    var regex = /^[0-9]{10,}$/;
    return regex.test(phone);
}

function validEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
