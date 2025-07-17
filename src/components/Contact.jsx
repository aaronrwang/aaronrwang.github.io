import r from './../assets/react.svg';
import './Contact.css';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const message = useRef();

    const inView = useInView(form, { once: true, margin: '-100px' });

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
        name.current.value = ''
        email.current.value = ''
        message.current.value = ''
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
            <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}

            >
                <div className="contact-title">
                    <h2>Contact Me</h2>
                    <hr />
                </div>
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required ref={name} />
                <input type="text" name="email" placeholder="Your Email" className="contact-inputs" required ref={email} />
                <textarea name="message" placeholder="Your Message" className="contact-inputs" required ref={message}></textarea>
                <button type="submit">Submit</button>
                <div className="sent" onClick={reset} style={{ 'visibility': 'hidden', 'marginBottom': '10px' }}>Thank You</div>
            </motion.form>
        </section >
    );
}