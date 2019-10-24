// IMPORTS MODULES
import  mongoose,  { Schema, model } from 'mongoose';


export interface Book extends mongoose.Document {
    title: string,
    description: string,
    isbn: string
}


const BookSchema = new Schema({
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
})


const Book = model<Book>('Book', BookSchema);

export default Book;