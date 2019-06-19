import React from 'react'
import axios from 'axios'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
            ]
        }
        this.fetchComments = this.fetchComments.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments() {
        axios.get('/api/comments')
            .then(comments => this.setState({comments: comments}))
            .catch(console.error);
    }

    addComment(commentAuthor, commentText) {
        this.setState(prevState => ({
            comments: prevState.comments.concat({
                id: prevState.comments.length+1,
                commentAuthor: commentAuthor,
                commentText: commentText,
            })
        }));
    }

    render() {
        return <div>
            <CommentForm addComment={this.addComment} />
            <CommentList comments={this.state.comments} />
        </div> 
        
    }
}

export default Comments;