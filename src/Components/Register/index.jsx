import React from 'react';
import './index.css'

import emailjs from '@emailjs/browser'; 

export default () => {
    const form = React.useRef();

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
    
        emailjs.sendForm(serviceId, templateID, param,'HqU4SjAlQ17cluL_w').then(res => {
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

    return (
        <div style={{marginTop:30}} id='register'>
            <h1>FAÇA UM ORÇAMENTO</h1>
            <div className='register_container'>
                <div className='register_help_container'>
                    <h2 style={{ textAlign: 'center' }}>Como pedir um orçamento?</h2>
                    <div className='register_help_container_2'>
                        <p>✅Precisa de um bot(robô)?
                            Descreva em detalhes o que precisa ser automatizado (quais passos manuais gostaria de automatizar).
                            Mencione site e quais passos/processos gostaria de automatizar</p>
                        <p>✅Precisa de um sistema?
                            Descreva a visão ou quais funcionalidades imagina serem necessárias;
                            Quero um sistema para Fazer X,Y,Z
                            Esse sistema deve me permitir fazer A,B,C,D</p>
                    </div>
                </div>
                <div className='form_container'>
                    <h1>Formulário</h1>
                    <form ref={form} onSubmit={onSubmit} id='form-register' action="seu_script_de_processamento.php" method="POST">
                        <div class="form-group">
                            <label for="name">Nome:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="mensagem">Telefone:</label>
                            <input type="text" id="phone" name="phone" required />
                        </div>
                        <div class="form-group">
                            <label for="mensagem">Mensagem:</label>
                            <textarea style={{ resize: 'none' }} id="comment" name="comment" rows="4" required></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <div style={{ padding: '35px', textAlign: 'center' }}>
                <p style={{ color: '#7A8088' }}>Descreva exatamente o que está buscando. Quanto mais detalhes, mais rápido conseguimos te dar um retorno. Descrições vagas demais irão atrasar muito o processo de te entregar uma solução</p>
            </div>
        </div>
    )
}