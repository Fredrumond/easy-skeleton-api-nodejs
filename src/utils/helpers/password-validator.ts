export class PasswordValidator {
    isValid (password:any) {
        if (password.length >= 6) {
            return true
        }
        return false
    }
}