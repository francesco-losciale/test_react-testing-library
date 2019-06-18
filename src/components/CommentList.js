
import React from 'react' 
import CommentCard from './CommentCard' 

function CommentList(props) {
    return (
        <div>{
                props.comments.map(
                    comment => 
                    <CommentCard key={comment.id} 
                        commentAuthor={comment.commentAuthor} 
                        commentText={comment.commentText} />
                )
            }
        </div>
    )
}

export default CommentList