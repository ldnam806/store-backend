"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    const status = error.status || 500;
    const message = error.message || 'Whoops!! something went wrong';
    res.status(status).json({ status, message });
};
exports.default = errorHandler;
