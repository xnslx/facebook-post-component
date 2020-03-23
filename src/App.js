import React, { Component } from 'react';
import './App.css';
import UserProfile from './component/UserProfile/UserProfile';
import Button from './component/Button/Button';
// import CommentsDisplay from './component/CommentsDisplay/CommentsDisplay';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import Comments from '../src/component/Comments/Comments';
library.add(faThumbsUp, faComment);



class App extends Component {
    state = {
        showMe: false,
        comments: '',
        commentsList : []
    }


    commentsToggleHandler = () => {
        this.setState((prevState) => {
            return { showMe: !prevState.showMe };
        });
    }

    changeHandler = (event) => {
        this.setState({ comments: event.target.value })
    }

    commentsListHandler = () => {
        this.setState({commentsList: [...this.state.commentsList, this.state.comments]})
    }

    render() {
        return ( 
            <React.Fragment >
                <div className = "App" >
                <UserProfile />
                <Button clicked = { this.commentsToggleHandler }/>
                {
                    this.state.showMe ? < Comments /> : null
                }
                </div> 
            </React.Fragment>
        )
    }
}

export default App;