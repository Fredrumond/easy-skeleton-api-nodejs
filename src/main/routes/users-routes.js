const UserCreateRouterComposer = require('../composers/user-create-router-composer')
const UserIndexRouterComposer = require('../composers/user-index-router-composer')
const UserShowRouterComposer = require('../composers/user-show-router-composer')
const UserUpdateRouterComposer = require('../composers/user-update-router-composer')
const UserDeleteRouterComposer = require('../composers/user-delete-router-composer')
const { adapt } = require('../adapters/express-router-adapter')

module.exports = router => {
  router.post('/users', adapt(UserCreateRouterComposer.compose()))
  router.get('/users', adapt(UserIndexRouterComposer.compose()))
  router.get('/users/:id', adapt(UserShowRouterComposer.compose()))
  router.put('/users/:id', adapt(UserUpdateRouterComposer.compose()))
  router.delete('/users/:id', adapt(UserDeleteRouterComposer.compose()))
}
