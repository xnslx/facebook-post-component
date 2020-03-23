import React, { Component } from 'react';
import avatarImage from '../../assets/avatarImage.jpg';
import CommentsDisplay from '../CommentsDisplay/CommentsDisplay';
import classes from './Comments.module.css';
import Counter from '../CommentsCounter/CommentsCounter';

class Comments extends Component {
    state = {
        comments: '',
        commentsList: [],
        counter: 0
    }

    onChange = (e) => {
        this.setState({ comments: e.target.value});
    }
    onKeyPress = (e) => {
        if(e.key === 'Enter' && e.target.value !== '') {
            this.setState({
                comments: '', 
                commentsList: [...this.state.commentsList, this.state.comments]})
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={classes.Comments}>
                    <div className={classes.Avatar}>
                        <img src={avatarImage} alt="myProfile" />
                    </div>
                    <input type="text" 
                            placeholder="Write a comment..." 
                            className={classes.Input} 
                            value={this.state.comments}
                            onChange={this.onChange}
                            onKeyPress={this.onKeyPress}
                    />
                </div>
                <Counter counter={this.state.commentsList}/>
                <CommentsDisplay commentsList={this.state.commentsList}/>
                
            </React.Fragment> 
        )
    }
}


export default Comments;
