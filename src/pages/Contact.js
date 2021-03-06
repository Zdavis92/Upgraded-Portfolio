import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_muscfeq', 'contact me', form.current, 'rU_TBZNs9li6An0aS')
            .then((result) => {
                console.log(result.text);
                alert('Email sent!')
                document.querySelector('#name').value = "";
                document.querySelector('#email').value = "";
                document.querySelector('#message').value = "";
            }, (error) => {
                console.log(error.text);
            })


    };
    return (
        <div className='flex flex-col items-center'>
            <div className='w-10/12 text-center'>
                <h2 className='text-3xl m-4 font-bold text-sky-800'>Contact Me!</h2>
                <p className='w-auto m-6'>If you have any questions for me. Feel free to send me an email and I'll get back to you as soon as possible!</p>
            </div>
            <div className='bg-sky-800 shadow-lg rounded w-11/12 p-3 m-2 md:w-9/12'>
                <form className='flex flex-wrap flex-col' ref={form} onSubmit={sendEmail}>
                    <label className='text-white'>Your Name</label>
                    <input id='name' className='rounded mx-px caret-RoseyBrown' type="text" name="from_name" />
                    <label className='text-white'>Your Email</label>
                    <input id='email' className='rounded mx-px caret-RoseyBrown' type="email" name="email" />
                    <label className='text-white'>Message</label>
                    <textarea id='message' className='rounded h-36 mx-px caret-RoseyBrown' name="message" />
                    <button className='w-10/12 bg-RoseyBrown text-white rounded-xl shadow mt-2 mx-auto sm:w-2/6' type="submit">Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;