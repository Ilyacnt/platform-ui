import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CourseItem } from './course-item'

const courseItemMock = {
  id: '1',
  name: 'Test Name',
  description: 'Test Description',
}

describe('course item', () => {
  it('should call delete callbacks', async () => {
    const onDeleteMock = jest.fn()

    render(<CourseItem course={courseItemMock} onDelete={onDeleteMock} />)

    const deleteButton = screen.getByText('Удалить')
    await userEvent.click(deleteButton)

    expect(onDeleteMock).toHaveBeenCalled()
  })
})
