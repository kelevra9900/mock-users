import { render, waitFor, screen } from '@testing-library/react-native'
import React from 'react'

import UserDetail from '../UserDetail'

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      user: {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        avatar: 'https://example.com/avatar.jpg'
      }
    }
  })
}))

describe('UserDetail', () => {
  beforeEach(() => {
    render(<UserDetail />)
  })

  it('renders user details', async () => {
    await waitFor(() => {
      const userEmailElement = screen.getByText('john.doe@example.com')
      const userAvatarElement = screen.getByTestId('user-avatar')
      const userBackgroundElement = screen.getByTestId('user-background')

      expect(userEmailElement).toBeTruthy()
      expect(userAvatarElement).toBeTruthy()
      expect(userBackgroundElement).toBeTruthy()
    })
  })
})
