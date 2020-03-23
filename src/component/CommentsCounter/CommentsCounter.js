import React from 'react';
import classes from './CommentsCounter.module.css';


const counter = (props) => (
    <div className={classes.Container}>{props.counter.length} comments</div>
);

export default counter;