"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS MODULES
const express_1 = require("express");
// INICIALIZANDO ROUTER
const router = express_1.Router();
// CONTROLLERS
const books_controller_1 = require("../controller/books/books.controller");
// ROUTES
router.get('/', books_controller_1.BooksController.allBooks);
router.get('/add', books_controller_1.BooksController.renderBook);
router.get('/delete/:id', books_controller_1.BooksController.deleteBook);
router.post('/add', books_controller_1.BooksController.addBook);
exports.default = router;
