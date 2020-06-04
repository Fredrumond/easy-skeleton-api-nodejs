const UserCreateRouterComposer = require('../composers/user-create-router-composer')
const { adapt } = require('../adapters/express-router-adapter')

module.exports = router => {
  router.post('/users', adapt(UserCreateRouterComposer.compose()))
}

// routes.post('/users', UserController.store)
// routes.get('/users', UserController.index)
// routes.get('/users/:id', UserController.show)
// routes.put('/users/:id', UserController.update)
// routes.delete('/users/:id', UserController.delete)
