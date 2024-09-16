import {UserShowRouter} from '@src/presentation/routers/user-show-router';
import UserRepository from '@src/repositories/user';

export class UserShowRouterComposer {
    static compose() {
        return new UserShowRouter(UserRepository);
    }
}