import UserRepository from '@src/repositories/user';
import {UserDeleteRouter} from "@src/presentation/routers/user-delete-router";

export class UserDeleteRouterComposer {
    static compose() {
        return new UserDeleteRouter(UserRepository);
    }
}