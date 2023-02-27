import React from 'react';
import './style.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import clsx from "clsx";

const Waitlist = () => {
    return (
        <div className='full-container'>
            <div className="waitlist-container">
                <div className='subtitle-container'>
                    <h2 className='waitlist-title'>Join Our Pre-Launch Wait List!</h2>
                    <p className='waitlist-detail'>Get notified as soon as the Avocado Investing app is live in the app store.</p>
                </div>
                <>
                    {/* Begin Prefinery Signup Form */}

                    <div id="pfy_embed_signup">
                        {/* Do not remove the 'pfy-signup-form' class from this form as it is used by the Prefinery JavaScript snippet */}
                        <Box
                            className={clsx("join", "pfy-signup-form")}
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                '& .MuiTextField-root': { m: 1, width: '100%' },
                            }}
                            action="https://i.prefinery.com/projects/xzpklod6/users/post"
                            id="pfy_signup_form"
                            method="post"
                            acceptCharset="UTF-8"
                            noValidate
                        >
                            {/* Recommended: Leave this field blank. Our JavaScript snippet automatically
   sets the following referrer input field with the visitor's HTTP Referrer
   if you leave it blank. Alternatively, you can explicitly set the value. */}
                            <input id="referrer" name="referrer" type="hidden" defaultValue="" />
                            {/* Recommended: Leave this field blank. Our JavaScript snippet automatically
   stores the unique referral code owned by the referring user in the cookie
   named "_pfy_xzpklod6_referrer_code" when a referral link is followed and
   will automatically set the value for the following referral_token input
   field if you leave it blank. */}
                            <input
                                id="referral_token"
                                name="referral_token"
                                type="hidden"
                                defaultValue=""
                            />
                            {/* Recommended: Leave these fields blank. Our JavaScript snippet automatically
   sets the following UTM input field values when UTM parameters are present
   in the URL. Alternatively, you can explicitly set these values. */}
                            <input id="utm_source" name="utm_source" type="hidden" defaultValue="" />
                            <input id="utm_medium" name="utm_medium" type="hidden" defaultValue="" />
                            <input
                                id="utm_campaign"
                                name="utm_campaign"
                                type="hidden"
                                defaultValue=""
                            />
                            <input id="utm_term" name="utm_term" type="hidden" defaultValue="" />
                            <input
                                id="utm_content"
                                name="utm_content"
                                type="hidden"
                                defaultValue=""
                            />

                            <TextField
                                autoComplete="email"
                                type="email"
                                name="user[profile][email]"
                                id="pfy_user_profile_email"
                                label="Email Address *"
                            />

                            {/* Honeypot for spam bots. Don't set this value. Remove at your own risk. */}
                            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                <input
                                    type="text"
                                    name="dd468b8941d8616213aad3e6059c6f26698a94de"
                                    tabIndex={-1}
                                    defaultValue=""
                                    autoComplete="off"
                                />
                            </div>

                            <button type="submit" className="joinBtn">Join</button>
                        </Box>
                    </div>
                    {/* End Prefinery Signup Form */}
                </>
            </div>
        </div>
    )
}

export default Waitlist;