"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS MODULES
const books_model_1 = __importDefault(require("../../models/books.model"));
class BookStroe {
    constructor() { }
    static add(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = new books_model_1.default(bookData);
                yield book.save();
            }
            catch (err) {
                console.error('[ERROR ADD]', err);
            }
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield books_model_1.default.find({}).sort({ title: 1 });
                return book;
            }
            catch (err) {
                console.error('[ERROR LIST]', err);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield books_model_1.default.findByIdAndRemove(id);
            }
            catch (err) {
                console.error('[ERROR DELETED]', err);
            }
        });
    }
}
exports.BookStroe = BookStroe;
