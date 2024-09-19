import {ExpressRouterAdapter} from "@src/main/adapters/express-router-adapter";

describe('main/adpters/express-router-adapter', () => {

    let mockRouter: any;
    let mockReq: any;
    let mockRes: any;

    beforeEach(() => {
        mockRouter = {
            route: jest.fn()
        };

        mockReq = {
            body: { someData: 'test' },
            params: { id: '1' },
        };

        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    it('should return response success', async () => {
        const mockHttpResponse = {
            statusCode: 200,
            body: { success: true }
        };

        mockRouter.route.mockResolvedValue(mockHttpResponse);
        const adaptedHandler = ExpressRouterAdapter.adapt(mockRouter);
        await adaptedHandler(mockReq, mockRes);

        expect(mockRouter.route).toHaveBeenCalledWith({
            body: mockReq.body,
            params: mockReq.params,
            query: mockReq.query,
            headers: mockReq.headers
        });

        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ success: true });
    });

    it('should return 500 and message error if router throw exception', async () => {
        mockRouter.route.mockRejectedValue(new Error('Something went wrong'));

        const adaptedHandler = ExpressRouterAdapter.adapt(mockRouter);
        await adaptedHandler(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({
            error: 'An unexpected error occurred'
        });
    });

});


