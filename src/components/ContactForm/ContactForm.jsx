import React from 'react';
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './style.css';

const ContactForm = () => {
    const form = React.useRef();

    const sendEmail = (e) => {
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
        <div id='contact' className='formContainer'>
            <Box
                className="form"
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1},
                }}
                noValidate
                autoComplete="off"
                ref={form} 
                onSubmit={sendEmail}
            >
                <h1 className="contact-title">Send us a message</h1>
                <TextField className='textField' label="Subject" name="subject" />
                <TextField className='textField' label="Name" name="name" />
                <TextField className='textField' type="email" label="Email" name="email" />
                <TextField className='textField' label="Message" name="message" multiline rows={5}/>
                <button className="submitBtn" variant='contained' size="large" value="send">Submit</button>
            </Box>
        </div>
    )

}

export default ContactForm;