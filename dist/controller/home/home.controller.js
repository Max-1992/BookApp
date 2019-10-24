"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    constructor() { }
    static index(req, res) {
        res.render('index');
    }
}
exports.HomeController = HomeController;
