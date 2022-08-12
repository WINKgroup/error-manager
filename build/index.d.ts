import express from "express";
export default class ErrorManager {
    static public(e: unknown): {
        [key: string]: any;
    };
    static sender(e: unknown, res: express.Response): void;
}
