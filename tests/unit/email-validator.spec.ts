jest.mock('validator', () => {
    let emailStored = '';

    return {
        isEmailValid: true,

        isEmail(email: any): boolean {
            emailStored = email;
            return this.isEmailValid;
        },

        getEmail(): string {
            return emailStored;
        }
    };
});

const validator = require('validator')
import {EmailValidator} from '@src/utils/helpers/email-validator'


describe('utils/helpers/email-validator', () => {
    it('should return true if validator returns true', () => {
        const sut = new EmailValidator();
        const isEmailValid = sut.isValid('valid_email@email.com');
        expect(isEmailValid).toBe(true);
    });

    it('should return false if validator returns false', () => {
        validator.isEmailValid = false;
        const sut = new EmailValidator();
        const isEmailValid = sut.isValid('invalid_email@email.com');
        expect(isEmailValid).toBe(false);
    });

    it('should call validator with correct email', () => {
        const sut = new EmailValidator();
        sut.isValid('any_email@mail.com');
        expect(validator.getEmail()).toBe('any_email@mail.com'); // Usa getEmail() para verificar
    });
});