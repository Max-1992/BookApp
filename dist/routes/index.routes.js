"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT ROUTES
const books_routes_1 = __importDefault(require("./books.routes"));
const home_routes_1 = __importDefault(require("./home.routes"));
class Routes {
    constructor(server) {
        server.use('/', home_routes_1.default);
        server.use('/books', books_routes_1.default);
    }
}
exports.Routes = Routes;
