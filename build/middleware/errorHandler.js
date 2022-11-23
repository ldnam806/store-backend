"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorTracker = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    const status = error.status || 500;
    const message = error.message || 'something went wrong';
    res.status(status).json({ status, message });
};
exports.default = errorTracker;
