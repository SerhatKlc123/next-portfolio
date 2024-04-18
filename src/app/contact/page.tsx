"use client"
import React, { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import Title from "@/components/Title";

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const mailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const messageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    const form = useRef<HTMLFormElement>(null);
    const [wait, setWait] = useState<boolean>(false);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setWait(true)

        if (name && email && message) {
            await emailjs.sendForm('service_9sv7fzywq', 'template_6v7gwcv', form.current!, '7aLwqC-mEWuJ3y33n')
                .then((result) => {
                    alert("I received your request. I'll return in 24h.")
                }, (error) => {
                    console.log(error);
                });

            setName("");
            setEmail("");
            setMessage("");
        } else {
            alert("Fill all before you send it!");
        }

        setWait(false);
    };

    return (
       <div className="h-screen w-screen flex-col justify-center items-center pt-[80px] px-5">
        <div className="p-5 xl:px-60 pr-2 pl-2">
        <Title title="Contact" subtitle="# Reach out to me for any inquiries or collaborations. We'll reply in 24 hours." />
        </div>
        
         <form ref={form} onSubmit={sendEmail} className="p-5 pb-10 xl:px-60 pr-2 pl-2 ">
            
            <div className="pb-4 z-50">
                <input
                    type="text"
                    value={name}
                    onChange={nameHandler}
                    name="fullName"
                    placeholder={"Fullname"}
                    className="border  border-purple-500 bg-[#0a0d10] p-3 rounded-lg text-purple-500 focus:text-gray-300 placeholder:text-purple-500 z-50"
                    style={{ width: '100%' }}
                />
            </div>
            <div className="pb-4">
                <input type="email" value={email} onChange={mailHandler} name="email" placeholder={"Email"}
                    style={{ width: '100%' }}
                    className="border border-purple-500 bg-[#0a0d10] p-3 rounded-lg text-purple-500 focus:text-gray-300 placeholder:text-purple-500" />
            </div>
            <div>
                <textarea rows={5} value={message} onChange={messageHandler} name="message" placeholder={"Message"} className="border border-purple-500 bg-[#0a0d10] p-2 rounded-lg text-purple-500 focus:text-gray-300 placeholder:text-purple-500"
                    style={{ width: '100%' }}
                />
            </div>
            <input type="submit" className="font-bold text-white bg-gradient-to-r border-[1px] hover:border-[3px] border-purple-600 hover:border-purple-200 from-purple-700 via-purple-400 to-purple-300  px-4 py-3 my-8 mx-auto flex items-center rounded-lg" value={wait ? "Senfing..." : "Request Contact"} />
        </form>
       </div>
    );
}

export default ContactForm;
