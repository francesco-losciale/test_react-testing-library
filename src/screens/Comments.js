import React from 'react'
import { createStore } from 'redux'
import axios from 'axios'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'
import comment_reducer from '../reducers/Comments'

const store = createStore(comment_reducer)

class Comments extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     comments: [
        //     ]
        // }
        this.fetchComments = this.fetchComments.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments() { // TODO remove
        // axios.get('/api/comments')
        //     .then(comments => this.setState({comments: comments}))
        //     .catch(console.error);
    }

    addComment(commentAuthor, commentText) {
        store.dispatch({
            type: 'ADD_COMMENT', 
            comment: {
                author: commentAuthor,
                text: commentText,
            }
        })

        // this.setState(prevState => ({
        //     comments: prevState.comments.concat({
        //         id: prevState.comments.length+1,
        //         commentAuthor: commentAuthor,
        //         commentText: commentText,
        //     })
        // }));
    }

    render() {
        return <div>
            <CommentForm addComment={this.addComment} />
            <CommentList comments={store.getState()} />
        </div> 
        
    }
}

export default Comments;