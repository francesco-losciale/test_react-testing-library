import React from 'react'

const initialState = {
    addButtonDisabled: true,
    commentAuthor: '',
    commentText: '',
};

class CommentForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleOnChangeAuthor = this.handleOnChangeAuthor.bind(this);
        this.handleOnChangeText = this.handleOnChangeText.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChangeAuthor(event) {
        this.setState({
            addButtonDisabled: false,
            commentAuthor: event.target.value,
        });
    }

    handleOnChangeText(event) {
        this.setState({
            commentText: event.target.value
        });
    }
    
    handleOnSubmit(event) { 
        event.preventDefault();
        this.props.addComment({
            commentAuthor: this.state.commentAuthor, 
            commentText: this.state.commentText,
        });
        this.setState(initialState);
    }

    render() {
        return (
            <form style={styles.form} onSubmit={this.handleOnSubmit}>
                <div>
                    <textarea style={styles.commentBox} 
                        value={this.state.commentText} 
                        onChange={this.handleOnChangeText} 
                        placeholder='Write something...' />
                </div>
                <div>
                    <label htmlFor='author'>Your Name</label>
                    <input style={styles.inputField} 
                        id='author' 
                        type='text' 
                        value={this.state.commentAuthor} 
                        onChange={this.handleOnChangeAuthor}/>
                </div>
                <button style={styles.button} 
                        disabled={this.state.addButtonDisabled}>
                    Add Comment
                </button>   
            </form>
        )
    }
}

const styles = {
    form: {
        margin: 'auto',
        padding: '0px',
        width: '500px'
    },
    commentBox: {
        width: '494px',
        height: '80px',
        marginBottom: '12px'
    },
    inputField: {
        width: '360px',
        float: 'right',
    },
    button: {
        marginTop: '12px',
        width: '500px',
        color: '#ffffff',
        backgroundColor: '#767676',
        padding: '6px',
        borderRadius: '8px'
    }
}
export default CommentForm