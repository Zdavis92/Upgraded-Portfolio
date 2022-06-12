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
        <div className='mx-auto'>
            <div className='flex flex-col items-center mx-auto w-11/12'>
                <h2 className='text-3xl m-4'>Contact Me!</h2>
                <p className='w-auto m-2'>If you have any questions for me. Feel free to send me an email and I'll get back to you as soon as possible!</p>
                <div className='bg-amber-300 border-2 border-black rounded w-11/12 p-3 m-2 md:w-9/12'>
                    <form className='flex flex-wrap flex-col' ref={form} onSubmit={sendEmail}>
                        <label className=''>Your Name</label>
                        <input id='name' className='rounded mx-px' type="text" name="from_name" />
                        <label className=''>Your Email</label>
                        <input id='email' className='rounded mx-px' type="email" name="email" />
                        <label className=''>Message</label>
                        <textarea id='message' className='rounded mx-px' name="message" />
                        <button className='w-10/12 bg-blue-300 border border-black rounded shadow mt-2 mx-auto sm:w-2/6' type="submit">Send Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;