"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManager = /** @class */ (function () {
    function ErrorManager(e) {
        this.e = e;
    }
    ErrorManager.prototype.get = function (e) {
        if (!e)
            e = this.e;
        console.error(e);
        var error = {
            status: 'error',
            message: 'internal error'
        };
        if (e instanceof Error) {
            switch (e.name) {
                case 'MongoError':
                    if (e.message.indexOf('duplicate key') !== -1)
                        error.message = 'duplication';
                    break;
            }
        }
        else if (typeof e === 'string')
            error.message = e;
        return error;
    };
    ErrorManager.get = function (e) {
        var errorManager = new ErrorManager(e);
        return errorManager.get();
    };
    return ErrorManager;
}());
exports.default = ErrorManager;
