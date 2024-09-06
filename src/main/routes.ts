import {Router } from 'express';
import fg from 'fast-glob';

const router = Router();

export default (app: any): void => {
    const routeFiles = fg.sync('**/src/main/routes/**routes.ts');
    app.use('/api', router);

    routeFiles.forEach(async (file) => {
        const route = await import(`../../${file}`);
        route.default(router);
    });
}