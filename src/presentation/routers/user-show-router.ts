import { HttpResponse } from '@src/presentation/helpers/http-response'

export class UserShowRouter {
    private userRepository: any;
    constructor(userRepository:any) {
        this.userRepository = userRepository;
    }

    async route(httpRequest:any) {
        const { id } = httpRequest.params

        const user = await this.userRepository.findByPk(id)

        if (user) {
            return HttpResponse.ok(user)
        }

        return HttpResponse.notFound('User not found!')
    }
}