"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// SERVICES STORE
const books_store_1 = require("../../services/books/books.store");
class BooksController {
    constructor() { }
    static renderBook(req, res) {
        res.render('books/add');
    }
    static addBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = req.body;
                yield books_store_1.BookStroe.add(newBook);
                res.redirect('/books');
            }
            catch (err) {
                console.error('[ERROR ADDBOOK]', err);
            }
        });
    }
    static allBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield books_store_1.BookStroe.list();
                res.render('books/list', { books });
            }
            catch (err) {
                console.error('[ERROR ALLBOOK]', err);
            }
        });
    }
    static deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield books_store_1.BookStroe.delete(id);
                res.redirect('/books');
            }
            catch (err) {
                console.error('[ERROR DELETEBOOK]', err);
            }
        });
    }
}
exports.BooksController = BooksController;
