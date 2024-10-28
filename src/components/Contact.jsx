import r from './../assets/react.svg';
import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3m68nvi', 'template_a4qwp58', form.current, {
                publicKey: import.meta.env.VITE_API_KEY,
            })
            .then(
                () => {
                    const sentDiv = document.querySelector('.sent');
                    sentDiv.style.visibility = 'visible';
                    setTimeout(() => {
                        sentDiv.style.visibility = 'hidden'; // Hide the div after 5 seconds
                    }, 2000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    function reset() {
        const sentDiv = document.querySelector('.sent');

        if (sentDiv) {
            sentDiv.style.visibility = 'none';
        }
    }
    return (
        <section id="contact">
            <div className='whitespace'></div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="contact-title">
                    <h2>Contact Me</h2>
                    <hr />
                </div>
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
                <input type="text" name="email" placeholder="Your Email" className="contact-inputs" required />
                <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                <button type="submit">Submit</button>
                <div className="sent" onClick={reset} style={{ 'visibility': 'hidden', 'marginBottom': '10px' }}>Thank You</div>
            </form>
        </section >
    );
}