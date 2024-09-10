import { UserIndexRouterComposer} from '@src/main/composers/user-index-router-composer'
import { ExpressRouterAdapter } from '@src/main/adapters/express-router-adapter'
import {UserCreateRouterComposer} from "@src/main/composers/user-create-router-composer";
import {UserShowRouterComposer} from "@src/main/composers/user-show-router-composer";
export default (router: any): void => {
    router.get('/users',ExpressRouterAdapter.adapt(UserIndexRouterComposer.compose()));
    router.post('/users',ExpressRouterAdapter.adapt(UserCreateRouterComposer.compose()))
    router.get('/users/:id', ExpressRouterAdapter.adapt(UserShowRouterComposer.compose()))
}