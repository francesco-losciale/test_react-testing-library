export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            const comment = action.comment
            const author = comment.author
            const text = comment.author
            return state.concat({
                id: state.length + 1, 
                commentAuthor: author,
                commentText: text,
            })
        default:
            return state
    }
}