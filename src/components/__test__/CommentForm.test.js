import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CommentForm from '../CommentForm'

// For this component, we are not going to run an entire integration test
// (i.e.adding a comment adds a comment to the comment list, etc.).
// What we want to test is that the “Add Comment” button is disabled until 
// both the comment text field and the “Your Name” text field are both 
// filled in.

describe('Comment Form', () => {
  test('it has a disabled button until both comment textbox and "Your Name" field have a value', () => {
    // Arrange
    const comment = 'Never put off until tomorrow what can be done today.'
    const author = 'Sensei Wu'
    // Act
    const { getByLabelText, getByPlaceholderText, getByText } = render(<CommentForm />)
    // Assert
    const submitButton = getByText('Add Comment')
    expect(submitButton.disabled).toEqual(true)
    const commentTextfieldNode = getByPlaceholderText('Write something...')
    fireEvent.change(commentTextfieldNode, { target: { value: comment } })
    expect(submitButton.disabled).toEqual(true)
    const nameFieldNode = getByLabelText('Your Name')
    fireEvent.change(nameFieldNode, { target: { value: author } })
    expect(submitButton.disabled).toEqual(false)
  })
})