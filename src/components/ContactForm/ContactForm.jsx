import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // TODO: Replace USER_ID with ENV variable once we stand app up on a server
        emailjs.sendForm('avo_gmail', 'avo_contact_form', form.current, 'user_XCYxkCSVcA0smx9QpDG4Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
    }


    return (
        <form className={'form-container'} ref={form} onSubmit={sendEmail}>
            <label>Subject</label>
            <input type="text" name="subject" />

            <label>Name</label>
            <input type="text" name="name" />

            <label>Email</label>
            <input type="email" name="email" />

            <label>Message</label>
            <textarea name="message" />

            <input type="submit" value="Send" />
        </form>
    )

}

export default ContactForm;