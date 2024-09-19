import UserRepository from '@src/repositories/user';
import {UserUpdateRouter} from "@src/presentation/routers/user-update-router";
import {EmailValidator} from "@src/utils/helpers/email-validator";
import {PasswordValidator} from "@src/utils/helpers/password-validator";

export class UserUpdateRouterComposer {
    static compose() {
        const emailValidator = new EmailValidator()
        const passwordValidator = new PasswordValidator()
        return new UserUpdateRouter(emailValidator,passwordValidator,UserRepository);
    }
}