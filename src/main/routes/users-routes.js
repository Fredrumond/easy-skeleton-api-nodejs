const UserCreateRouterComposer = require('../composers/user-create-router-composer')
const UserIndexRouterComposer = require('../composers/user-index-router-composer')
const { adapt } = require('../adapters/express-router-adapter')

module.exports = router => {
  router.post('/users', adapt(UserCreateRouterComposer.compose()))
  router.get('/users', adapt(UserIndexRouterComposer.compose()))
}

// routes.post('/users', UserController.store)
// routes.get('/users', UserController.index)
// routes.get('/users/:id', UserController.show)
// routes.put('/users/:id', UserController.update)
// routes.delete('/users/:id', UserController.delete)
