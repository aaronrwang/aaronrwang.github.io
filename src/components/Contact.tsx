import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';


import { X, Send } from 'lucide-react';

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const name = useRef<HTMLFormElement | null>(null);
  const email = useRef<HTMLFormElement | null>(null);
  const message = useRef<HTMLFormElement | null>(null);

  const inView = useInView(form, { once: true, margin: '-100px' });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // emailjs
    //   .sendForm('service_3m68nvi', 'template_a4qwp58', form.current, {
    //     publicKey: import.meta.env.VITE_API_KEY,
    //   })
    //   .then(
    //     () => {
    //       const sentDiv = document.querySelector('.sent');
    //       sentDiv.style.visibility = 'visible';
    //       setTimeout(() => {
    //         sentDiv.style.visibility = 'hidden'; // Hide the div after 5 seconds
    //       }, 2000);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
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
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, x: 0 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-96 space-y-6 border px-2 pt-2 rounded-xl"
    >
      <div className="flex justify-between">

        <Button size="sm" className="text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
          <X size={16} />
        </Button>
        <h2>Contact Me</h2>
        <Button type="submit" size="sm" className="text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
          <Send size={16} />
        </Button>
      </div>

      <Input type="text" name="name" placeholder="Name" className="contact-inputs" required ref={name} />
      <Input type="text" name="email" placeholder="Email" className="contact-inputs" required ref={email} />
      <Textarea name="message" placeholder="Type your message here." required ref={message} />

      <div className="sent" onClick={reset} style={{ 'display': 'none' }}>Thank You</div>
    </motion.form>
  );
}