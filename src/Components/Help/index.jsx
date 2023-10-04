import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import './index.css';

export default () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const form = React.useRef();

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };


    const validForm = (email, msg) => {
        return email !== '' && msg !== ''
    }

    function onSubmit(e) {
        e.preventDefault();
        const email = document.querySelector('input[name="emailFAQ"]');
        const msg = document.querySelector('textarea[name="commentFaq"]');
        if (validForm(email.value, msg.value)) {
            let isSend = sendEmail(email.value,msg.value);
            alert(isSend ? 'Email enviado com sucesso!\n Em 24 horas vamos entrar em contato!' : 'Ops...Algo deu erro ao enviar o email.')
        }
    }

    async function sendEmail(to, message) {
        
        let param = {
            to: 'gsctech@hotmail.com',
            replyto: to,
            message: message,
            to_name:to
        };
    
        const serviceId = 'service_jd43wir';
        const templateID = 'template_n6a7fa3';
    
        emailjs.send(serviceId, templateID, param,'HqU4SjAlQ17cluL_w').then(res => {
            return true;
        }).catch(err => {
            return false;
        });
    }

    return (
        <div className={`chat-button ${isChatOpen ? 'open' : ''}`}>
            {!isChatOpen && (<button onClick={toggleChat} className="chat-button-toggle">
                Ajuda
            </button>)}
            {isChatOpen && (
                <div className="chat-form">
                    <h2>Envie sua pergunta</h2>
                    <form ref={form} onSubmit={onSubmit}>
                        <input type='email' name='emailFAQ' placeholder='Digite seu email' required />
                        <br />
                        <br />
                        <textarea name='commentFaq' placeholder="Digite sua pergunta" required></textarea>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button type="submit">Enviar</button>
                            <button className="close-button" onClick={toggleChat}>
                                Fechar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};