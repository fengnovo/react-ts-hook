// const Koa = require('koa')
// const server = require('./GithubServer')
import Koa from 'koa'
import GithubServer from './GithubServer'

const app = new Koa()

app.use(async (ctx: Koa.DefaultContext) => {
  const { userName = 'fengnovo' } = ctx.request || 'fengnovo'
  const githubServer = new GithubServer(userName);

  const { data } = await githubServer.getUsers();
  const repos = await githubServer.getRepos();
  data.repos = repos.data
  const reponse  = JSON.stringify(data, null, 2)
  console.log(reponse)
  ctx.body = reponse
})

app.listen(3001, () => {
  console.log('http://localhost:3001')
})