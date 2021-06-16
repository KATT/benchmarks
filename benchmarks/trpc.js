'use strict'

const trpc = require('@trpc/server')

const router = trpc.router().query('', {
  resolve () {
    return {
      hello: 'world'
    }
  }
})
const server = trpc.createHttpServer({
  router,
  createContext: () => { }
})

server.listen(3000)
