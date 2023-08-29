const scroolToForm = (e) => {
    document.getElementById("form").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

const validForm = (name, email, msg, phone) => { return name !== '' && email !== '' && msg !== '' && phone !== ''; }

document.querySelector("form")
    .addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const msg = document.querySelector('textarea[name="comment"]');
    const phone = document.querySelector('input[name="phone"]');
    debugger
    if (validForm(name.value, email.value, msg.value, phone.value)) {
        let send = enviarEmail(email.value, name.value, msg.value, phone.value);
        alert(send ? 'Email enviado com sucesso!\n Em 24 horas vamos entrar em contato!' : 'Ops...Algo deu erro ao enviar o email.')
    }
}

async function enviarEmail(to, name, message, phone) {
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