import { Express, Request, Response } from 'express';
import validateRequest from './middleware/validateRequest';
import { createUserHandler, 
        createUserSessionHandler } from './controller/user.controller';
import { createUserSchema, createUserSessionSchema } from './schema/user.schema';

export default function(app: Express){
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post("api/users", validateRequest(createUserSchema), createUserHandler));

    app.post(
        "api/sessions",
        validateRequest(createUserSessionSchema),
        createUserSessionHandler
    );
}