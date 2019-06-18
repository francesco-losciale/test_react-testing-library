import React from 'react'
import { render } from '@testing-library/react'
import CommentList from '../CommentList'

describe('Comment List', () => {
    test('It renders a list of comment cards with their comment and author tag', () => {
        // Arrange
        const comment1 = {
            id: 1,
            commentText: 'I do love writing tests',
            commentAuthor: 'The Notester'
        }
        const comment2 = {
            id: 2,
            commentText: 'Nothing is better than a good comment app',
            commentAuthor: 'Comment Hater'
        }
        const props = {
            comments: [comment1, comment2]
        }
        // Act
        const { getByText } = render(<CommentList {...props} />)
        // Assert
        const firstCommentNode = getByText(comment1.commentText)
        const firstAuthorTagNode = getByText(`- ${comment1.commentAuthor}`)
        const secondCommentNode = getByText(comment2.commentText)
        const secondAuthorTagNode = getByText(`- ${comment2.commentAuthor}`)
        
        expect(firstCommentNode).toBeDefined()
        expect(firstAuthorTagNode).toBeDefined()
        expect(secondCommentNode).toBeDefined()
        expect(secondAuthorTagNode).toBeDefined()
    })
})