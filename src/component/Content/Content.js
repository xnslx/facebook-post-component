import React from 'react';
import contentImage from '../../assets/contentImage.jpg';
import classes from './Content.module.css';

const content = () => ( 
    <div className = { classes.Container } >
        <img src = { contentImage } alt = "content" />
    </div>
);

export default content;