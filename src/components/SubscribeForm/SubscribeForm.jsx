import React from 'react';
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './style.css';

const SubscribeForm = () => {
    const form = React.useRef();

    const subscribe = (e) => {
        e.preventDefault();

        // TODO: Replace USER_ID with ENV variable once we stand app up on a server
        emailjs.sendForm('avo_gmail', 'avo_subscribe_form', form.current, 'user_XCYxkCSVcA0smx9QpDG4Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
    }


    return (
        <div>
            <Box
                className="subscribe"
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                ref={form} 
                onSubmit={subscribe}
            >
                <TextField className='textField' type="email" label="Your Email" name="subscriber" />
                <button className="subscribeBtn" value="send">Subscribe</button>
            </Box>
        </div>
    )

}

export default SubscribeForm;