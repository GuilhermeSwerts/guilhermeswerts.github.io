const scroolToForm = (e) => {
    document.getElementById("edi-qlq8wjl").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

const validForm = (name, email, msg) => { return name !== '' && email !== '' && msg !== ''; }

document.querySelector("form")
    .addEventListener("submit", onSubmit);

function onSubmit(e) {
    debugger
    e.preventDefault();
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const msg = document.querySelector('textarea[name="comment"]');
    if (validForm(name.value, email.value, msg.value)) {
        let send = enviarEmail(email.value, name.value, msg.value);
        alert(send ? 'Email enviado com sucesso!\n Em 24 horas vamos entrar em contato!' : 'Ops...Algo deu erro ao enviar o email.')
    }
}

async function enviarEmail(to, name, message) {
    let param = {
        name: name,
        to: 'gsctech@hotmail.com',
        replyto: to,
        message: message
    };

    const serviceId = 'service_jd43wir';
    const templateID = 'template_5tgkzir';

    emailjs.send(serviceId, templateID, param).then(res => {
        return true;
    }).catch(err => {
        return true;
    });
}
