import React from "react";
import emailjs from "emailjs-com"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        toast('Message Sent!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
        const templateparams = {
            from_name: name + " " + email,
            message: message,
          };
        emailjs.send("service_ttyx8us", "template_x8iwj68", templateparams, "4bzNVwyhQaT-bOLYc")}
    return (
            <div className="contact">
                <h2 id="contact-heading1" data-aos="fade-up" data-aos-duration="500">Get in touch with me!</h2>
                <h4 id="contact-heading2" data-aos="fade-up" data-aos-duration="500">Whether want me to join you in a project or Just want to say Hi!</h4>
                <form onSubmit={onSubmit} method="POST" id="contact-form" data-aos="fade-up" data-aos-duration="500">
                    <input type="text" name="name" id="name-input" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your Name" />
                    <input type="email" name="email" id="email-input" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your Email" />
                    <textarea id="message-input" name="message" value={message} onChange={(event) => setMessage(event.target.value)} rows="4" columns="20" placeholder="Your Message"></textarea>
                    <input id="submit-button" type="submit" />
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover={false}
                    theme="dark"
                />
            </div>
        )
    }