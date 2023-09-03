import { API_ENDPOINTS } from './api-endpoints'
import { HttpClient } from './http-client'
import { QueryOptions, Users } from '../../types/user'

export const userClient = {
  paginated: ({ page, per_page }: QueryOptions) => {
    return HttpClient.get<Users>(API_ENDPOINTS.USERS, {
      page,
      per_page
    })
  }
}
