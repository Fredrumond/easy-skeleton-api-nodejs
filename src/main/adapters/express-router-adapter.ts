interface HttpRequest {
    body: any;
    params: any;
}

interface HttpResponse {
    statusCode: number;
    body: any;
}

interface Router {
    route(httpRequest: HttpRequest): Promise<HttpResponse>;
}
export class ExpressRouterAdapter {
    static adapt(router: Router) {
        return async (req:any, res:any): Promise<void> => {
            const httpRequest:any = {
                body: req.body,
                params: req.params
            };

            try {
                const httpResponse = await router.route(httpRequest);
                res.status(httpResponse.statusCode).json(httpResponse.body);
            } catch (error) {
                res.status(500).json({
                    error: 'An unexpected error occurred'
                });
            }
        };
    }
}
