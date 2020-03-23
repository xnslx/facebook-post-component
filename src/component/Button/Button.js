import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Button.module.css';


const button = (props) => ( 
    <div className = { classes.Buttons } >
        <div className = { classes.Button } >
        <FontAwesomeIcon icon = "thumbs-up" /> Like 
        </div> 
        <div className = { classes.Button } >
        <FontAwesomeIcon icon = "comment" onClick = {() => props.clicked() }/> Comment 
        </div> 
    </div>
)

export default button;