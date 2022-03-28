const axios = require('axios')

interface User {
  name: string
}

interface Repo {
  name: string
}

type UserResponse = {
  data: User
}

type RepoResponse = {
  data: Repo[]
}

class GithubServer {
  userName: string
  constructor(userName:string) {
    this.userName = userName
  }
  async getUsers(): Promise<UserResponse> {
    return axios.get('https://api.github.com/users/' + this.userName, {
      headers: {'content-type': 'application/json;charset=UTF-8'}
    })
  }
  async getRepos(): Promise<RepoResponse> {
    return axios.get('https://api.github.com/users/' + this.userName + '/repos', {
      headers: {'content-type': 'application/json;charset=UTF-8'}
    })
  }
}

exports.module = {
  GithubServer
}