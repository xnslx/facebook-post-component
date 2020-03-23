import React from 'react';
import classes from './CommentsDisplay.module.css';

const commentsDisplay = (props) =>  (
        <ul className={classes.Container}>
            {props.commentsList.map((comment, index) => 
                <li key={index} className={classes.List}>{comment}</li>
            )}
        </ul>    
);

export default commentsDisplay;