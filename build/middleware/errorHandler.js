"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchErrorMiddleware = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    res
        .status(error.status ? error.status : 500)
        .json({ message: error.message });
};
exports.default = catchErrorMiddleware;
