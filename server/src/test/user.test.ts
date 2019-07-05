import axios from 'axios'

describe('user resolvers', () => {
  test('allUsers', async () => {
    const response = await axios.post('http://localhost:8000/graphql', {
      query: `
        query {
          users {
            id
            email
          }
        }
      `,
    })

    const { data } = response
    expect(data).toMatchObject({
      data: {
        users: [
          {
            id: '5cf2a976c5240879e8a11129',
            email: 'admin@admin.com',
          },
        ],
      },
    })
  })
})
