"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS MODULES
const express_1 = require("express");
// INICIALIZANDO ROUTER
const router = express_1.Router();
// CONTROLLERS
const home_controller_1 = require("../controller/home/home.controller");
// ROUTES
router.get('/', home_controller_1.HomeController.index);
exports.default = router;
