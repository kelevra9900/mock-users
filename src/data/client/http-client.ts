import axios from 'axios'

import { REST_API_ENDPOINT } from '@utils/constants'

const Axios = axios.create({
  baseURL: REST_API_ENDPOINT,
  timeout: 5000000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// You can use here the interceptors if you want

// You can update this to add more methods types
export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params })
    return response.data
  }
}
