import React from 'react'
import PropTypes from 'prop-types'
const CommentCard = (props) => (
  <div style={styles.card}>
    <p>{props.commentText}</p>
    <p style={styles.authorTag}>- {props.commentAuthor}</p>
  </div>
)
CommentCard.propTypes = {
  commentAuthor: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired
}
// FYI, I added some basic styling to make the 
// comment cards look more like the mock.
const styles = {
  card: {
    margin: '24px',
    padding: '2px 24px',
    fontFamily: 'Palatino',
    fontStyle: 'italic',
    backgroundColor: '#f5f5f5',
    height: '80px',
    position: 'relative',
    border: '1px solid #767676',
    borderRadius: '8px'
  },
  authorTag: {
    position: 'absolute',
    bottom: '0',
    right: '12px'
  }
}
export default CommentCard