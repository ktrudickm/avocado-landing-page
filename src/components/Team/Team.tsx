import React from 'react';
import './style.css';
import {Member, MEMBERS} from './members';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';


const Team = () => {
    const [open, setOpen] = React.useState(false);
    const [activeMember, setActiveMember] = React.useState<Member>(null);

    return (
        <div className="team-container">
            <h1 className="team-title">OUR TEAM</h1>
            <ImageList className="member-grid" sx={{overflowY: "unset"}}>
                {MEMBERS.map((member) => (
                    <React.Fragment key={member.name}>
                        <ImageListItem >
                            <img src={member.imgSrc}/>
                            <ImageListItemBar
                                title={member.name}
                                subtitle={member.position}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        onClick={() => {
                                            setActiveMember(member);
                                            setOpen(true);
                                        }}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    </React.Fragment>
                ))}
            </ImageList>

            { activeMember && <Snackbar
                className="snackbar"
                open={open}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                onClose={(e, r) => r !== "clickaway" && setOpen(false)}
            >
                <div className="snackbar-content">
                    <div>{activeMember.description}</div>
                    <div className="close-button-container">
                        <IconButton
                            className="close-button"
                            size="medium"
                            aria-label="close"
                            color="inherit"
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon fontSize="medium" />
                        </IconButton>
                    </div>
                </div>
            </Snackbar>}
        </div>
    )

}

export default Team;