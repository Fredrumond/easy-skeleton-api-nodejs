import {UserCreateRouter} from "@src/presentation/routers/user-create-router";
import {EmailValidator} from "@src/utils/helpers/email-validator";
import {PasswordValidator} from "@src/utils/helpers/password-validator";
import UserRepository from '@src/repositories/user';
import * as console from "console";

export class UserCreateRouterComposer {
    static compose() {
        return new UserCreateRouter(new EmailValidator(),new PasswordValidator(),UserRepository);
    }
}