import validator from 'validator'
export class EmailValidator {
    isValid (email: any) {
        return validator.isEmail(email)
    }
}