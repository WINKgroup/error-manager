"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManager = /** @class */ (function () {
    function ErrorManager() {
    }
    ErrorManager.public = function (e) {
        console.error(e);
        var error = {
            status: 'error',
            message: 'internal error'
        };
        if (e instanceof Error) {
            if (e.name === 'MongoError') {
                error = JSON.parse(JSON.stringify(e));
                delete error.name;
                error.message = 'internal error';
                if (e.message.indexOf('duplicate key') !== -1)
                    error.message = 'duplication';
            }
        }
        return error;
    };
    ErrorManager.sender = function (e, res) {
        var err = this.public(e);
        res.status(500).json(err);
    };
    return ErrorManager;
}());
exports.default = ErrorManager;
