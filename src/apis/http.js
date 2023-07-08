import axios from 'axios'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

const http = new Http().instance
export default http
