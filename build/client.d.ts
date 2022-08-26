export interface ErrorManagerResult {
    status: 'warn' | 'error';
    message: string;
}
export default class ErrorManager {
    e?: unknown;
    constructor(e?: unknown);
    get(e?: unknown): ErrorManagerResult;
    static get(e: unknown): ErrorManagerResult;
}
