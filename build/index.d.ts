import express from "express";
import ErrorManager from "./client";
export default class ErrorManagerServer extends ErrorManager {
    sender(res: express.Response, e?: unknown): void;
    static get(e: unknown): import("./client").ErrorManagerResult;
}
