"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerClient = /** @class */ (function () {
    function ErrorManagerClient() {
    }
    ErrorManagerClient.prototype.costructor = function (e) {
        this.e = e;
    };
    ErrorManagerClient.prototype.public = function (e) {
        if (!e)
            e = this.e;
        console.error(e);
        var error = {
            status: 'error',
            message: 'internal error'
        };
        if (e instanceof Error)
            error.message = e.message;
        else if (typeof e === 'string')
            error.message = e;
        return error;
    };
    return ErrorManagerClient;
}());
exports.default = ErrorManagerClient;
