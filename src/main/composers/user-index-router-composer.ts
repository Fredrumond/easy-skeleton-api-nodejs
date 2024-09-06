import {UserIndexRouter} from '@src/presentation/routers/user-index-router';
import UserRepository from '@src/repositories/user';
import * as console from "console";

export class UserIndexRouterComposer {
    static compose() {
        return new UserIndexRouter(UserRepository);
    }
}