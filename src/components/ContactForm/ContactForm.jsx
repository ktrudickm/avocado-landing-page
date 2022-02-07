import React from 'react';
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './style.css';

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
        <Box
            className="form"
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
            ref={form} 
            onSubmit={sendEmail}
        >
            <h1 className="contact-title">Send us a message</h1>
            <TextField label="Subject" name="subject" />
            <TextField label="Name" name="name" />
            <TextField type="email" label="Email" name="email" />
            <TextField label="Message" name="message" multiline rows={5}/>
            <Button className="submit" variant='contained' size="large" value="send">Submit</Button>
        </Box>
    )

}

export default ContactForm;