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
        <div className="formContainer">
            <Box
                className="subscribe"
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                ref={form} 
                onSubmit={subscribe}
            >
                <TextField className='textField' type="email" label="Email Address" name="subscriber" />
                <TextField className='textField' type="text" label="Ethereum Address" name="ethereumAddress" />
                <button className="subscribeBtn" value="send">Subscribe</button>
            </Box>
        </div>
    )

}

export default SubscribeForm;