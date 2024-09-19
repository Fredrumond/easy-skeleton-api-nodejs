export class ExpressRouterAdapter {
    static adapt(router:any) {
        return async (req:any, res:any): Promise<void> => {
            const httpRequest:any = {
                body: req.body,
                params: req.params
            };

            const httpResponse = await router.route(httpRequest);
            res.status(httpResponse.statusCode).json(httpResponse.body);
        };
    }
}