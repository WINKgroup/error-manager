import express from 'express';
import ErrorManager from './client';

export default class ErrorManagerServer extends ErrorManager {
    sender(res: express.Response, e?: unknown) {
        const err = this.get(e);
        let statusCode = 500;

        if (err.message.indexOf('not found') !== -1) statusCode = 404;
        res.status(statusCode).json(err);
    }

    static get(e: unknown) {
        const errorManager = new ErrorManagerServer(e);
        return errorManager.get();
    }
}
