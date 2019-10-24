// IMPORTS MODULES
import  BookModel, { Book }  from '../../models/books.model';


export class BookStroe {

    constructor(){}

    static async add( bookData: Book ) {
            try {
                const book: Book = new BookModel(bookData);
                await book.save();
            } catch (err) {
                console.error('[ERROR ADD]', err);
            }
        }


    static async list() {
            try {
                const book: Book[] = await BookModel.find({}).sort({ title: 1 });
                return book;   
            } catch (err) {
                console.error('[ERROR LIST]', err);
            }
        }


    static async delete( id: string ) {
            try {
                await BookModel.findByIdAndRemove(id);
            } catch (err) {
                console.error('[ERROR DELETED]', err);
            }
            
        }

}