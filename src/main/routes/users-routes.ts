import { UserIndexRouterComposer} from '@src/main/composers/user-index-router-composer'
import { ExpressRouterAdapter } from '@src/main/adapters/express-router-adapter'

export default (router: any): void => {
    router.get('/users',ExpressRouterAdapter.adapt(UserIndexRouterComposer.compose()));
}