import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // Importa las dependencias de React Query
import { render, waitFor, screen } from '@testing-library/react-native'
import React from 'react'

import HomeScreen from '../Home'

const queryClient = new QueryClient()

describe('HomeScreen', () => {
  const navigation: any = {}
  const route: any = {}

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen navigation={navigation} route={route} />
      </QueryClientProvider>
    )
  })

  it('render loading component', () => {
    const loadText = screen.getByText('Loading users, please wait...')
    expect(loadText).toBeTruthy()
  })

  it('renders user list', async () => {
    await waitFor(() => {
      const user1Element = screen.getByText('George Bluth')
      const user1email = screen.getByText('george.bluth@reqres.in')
      const user2Element = screen.getByText('Janet Weaver')
      const user2email = screen.getByText('janet.weaver@reqres.in')
      expect(user1Element).toBeTruthy()
      expect(user1email).toBeTruthy()
      expect(user2Element).toBeTruthy()
      expect(user2email).toBeTruthy()
    })
  })
})
