import { HttpResponse } from '@src/presentation/helpers/http-response'

export class UserIndexRouter {
    private userRepository: any;
    constructor(userRepository:any) {
        this.userRepository = userRepository;
    }

    async route(httpRequest:any) {
        const users = await this.userRepository.getAll();
        return HttpResponse.ok(users);
    }
}