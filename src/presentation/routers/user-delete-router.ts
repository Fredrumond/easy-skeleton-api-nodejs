import { HttpResponse } from '@src/presentation/helpers/http-response'

export class UserDeleteRouter {
    private userRepository: any;
    constructor(userRepository:any) {
        this.userRepository = userRepository;
    }

    async route(httpRequest:any) {
        const { id } = httpRequest.params

        const user = await this.userRepository.findByPk(id)

        if (user) {
            await this.userRepository.destroy(user)
            return HttpResponse.ok(user, 'User deleted successfully!')
        }

        return HttpResponse.notFound('User not found!')
    }
}