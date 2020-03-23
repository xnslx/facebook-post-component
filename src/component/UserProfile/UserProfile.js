import React from 'react';
import avatarImage from '../../assets/avatarImage.jpg';
import classes from './UserProfile.module.css';
import UserName from '../UserName/UserName';
import Content from '../Content/Content';

const userProfile = () => ( 
    <React.Fragment >
        <div className = { classes.Container } >
            <div className = { classes.Avatar } >
            <img src = { avatarImage } alt = "myProfile" />
        </div> 
        <UserName />
        <Content />
        </div> 
    </React.Fragment>
);

export default userProfile;