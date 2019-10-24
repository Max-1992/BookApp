"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS MODULES
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    }
});
const Book = mongoose_1.model('Book', BookSchema);
exports.default = Book;
