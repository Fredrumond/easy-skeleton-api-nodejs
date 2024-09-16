import { UserIndexRouterComposer} from '@src/main/composers/user-index-router-composer'
import { ExpressRouterAdapter } from '@src/main/adapters/express-router-adapter'
import {UserCreateRouterComposer} from "@src/main/composers/user-create-router-composer";
import {UserShowRouterComposer} from "@src/main/composers/user-show-router-composer";
import {UserUpdateRouterComposer} from "@src/main/composers/user-update-router-composer";
import {UserDeleteRouterComposer} from "@src/main/composers/user-delete-router-composer";
export default (router: any): void => {
    router.get('/users',ExpressRouterAdapter.adapt(UserIndexRouterComposer.compose()));
    router.post('/users',ExpressRouterAdapter.adapt(UserCreateRouterComposer.compose()))
    router.get('/users/:id', ExpressRouterAdapter.adapt(UserShowRouterComposer.compose()))
    router.put('/users/:id',ExpressRouterAdapter.adapt(UserUpdateRouterComposer.compose()))
    router.delete('/users/:id',ExpressRouterAdapter.adapt(UserDeleteRouterComposer.compose()))
}