import React from 'react'
import { render } from '@testing-library/react'
import CommentCard from '../CommentCard'

describe('Comment Card', () => {
    test('it renders the comment and the author', () => {
        const props = {
            commentAuthor: 'Luke Ghenco', 
            commentText: 'React Testing Library is great',
        }
       
        const { getByText } = render(<CommentCard {...props} />)
        
        const commentNode = getByText(props.commentText)
        const authorTagNode = getByText(`- ${props.commentAuthor}`)
        expect(commentNode).toBeDefined()
        expect(authorTagNode).toBeDefined()
    })
  })