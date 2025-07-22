
import { Mail } from "lucide-react"
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import emailjs from '@emailjs/browser';


import { X, Send } from 'lucide-react';

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Component() {
  const [open, setOpen] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);

  function closePopover() {
    setOpen(false)
  }
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closePopover();
    emailjs
      .sendForm('service_3m68nvi', 'template_a4qwp58', form.current!, {
        publicKey: import.meta.env.VITE_API_KEY,
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          name.current!.value = ''
          email.current!.value = ''
          message.current!.value = ''
        },
        (error) => {
          toast.error("Message failed");
          console.log(error)
        },
      );

  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50 border-[var(--teal-accent)]"
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" aria-label="Filters">
            <p className="hidden sm:block">Contact Me</p>
            <Mail size={16} aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="m-4 p-2 w-64 rounded-xl">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div className="flex justify-between">

              <Button type="button" size="sm" className="text-sm sm:aspect-square transition-transform duration-200 hover:scale-105" onClick={() => { closePopover() }}>
                <X size={16} />
              </Button>
              <h2>Contact Me</h2>
              <Button type="submit" size="sm" className="text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
                <Send size={16} />
              </Button>
            </div>

            <Input type="text" name="name" placeholder="Name" className="contact-inputs" ref={name} />
            <Input type="text" name="email" placeholder="Email" className="contact-inputs" ref={email} />
            <Textarea name="message" placeholder="Type your message here." ref={message} />
          </form>
        </PopoverContent>
      </Popover>
    </motion.div>
  )
}
