import React from 'react'
import { render, fireEvent, wait, cleanup, getByPlaceholderText } from '@testing-library/react'
import axios from 'axios'
import Comments from '../Comments'
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
const comments = [ comment1, comment2 ]
const newComment = {
  id: 3,
  commentText: 'Brave new world of testing',
  commentAuthor: 'Spongebob'
}

describe('Comments Screen', () => {
  
  afterEach(cleanup)
  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve(comments))
    axios.post = jest.fn(() => Promise.resolve(newComment))
  })
  
  it('It fetches comments and renders them to the page', async () => {
    render(<Comments />)
  })

  it('It fetches comments and renders them to the page', async () => {
    const { getByText } = render(<Comments />)
    await wait(() => getByText(comment1.commentText))
    
    const firstCommentNode = getByText(comment1.commentText)
    const firstAuthorTagNode = getByText(`- ${comment1.commentAuthor}`)
    const secondCommentNode = getByText(comment2.commentText)
    const secondAuthorTagNode = getByText(`- ${comment2.commentAuthor}`)
    expect(firstCommentNode).toBeDefined()
    expect(firstAuthorTagNode).toBeDefined()
    expect(secondCommentNode).toBeDefined()
    expect(secondAuthorTagNode).toBeDefined()
  })

  it('it creates a new comment, renders it and clears out form upon submission', async () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(<Comments />)
    await wait(() => getByText(comment1.commentText))
    const submitButton = getByText('Add Comment')
    const commentTextfieldNode = getByPlaceholderText('Write something...')
    const nameFieldNode = getByLabelText('Your Name')
    fireEvent.change(commentTextfieldNode, { target: { value: newComment.commentText } })
    fireEvent.change(nameFieldNode, { target: { value: newComment.commentAuthor } })
    fireEvent.click(submitButton)
    await wait(() => getByText(`- ${newComment.commentAuthor}`))
    expect(commentTextfieldNode.value).toEqual('')
    expect(nameFieldNode.value).toEqual('')
  })

})