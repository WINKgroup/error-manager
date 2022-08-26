"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("./client"));
var ErrorManagerServer = /** @class */ (function (_super) {
    __extends(ErrorManagerServer, _super);
    function ErrorManagerServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorManagerServer.prototype.sender = function (res, e) {
        var err = this.get(e);
        var statusCode = 500;
        if (err.message.indexOf('not found') !== -1)
            statusCode = 404;
        res.status(statusCode).json(err);
    };
    ErrorManagerServer.get = function (e) {
        var errorManager = new ErrorManagerServer(e);
        return errorManager.get();
    };
    return ErrorManagerServer;
}(client_1.default));
exports.default = ErrorManagerServer;
