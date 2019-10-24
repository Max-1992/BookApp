// IMPORTS MOUDLES
import { Request, Response } from 'express';

// SERVICES STORE
import { BookStroe } from '../../services/books/books.store';

// MODEL INTERFACE
import { Book } from '../../models/books.model';


export class BooksController {

    constructor(){}

  static renderBook( req: Request, res: Response ) {
                res.render('books/add')
            }

  static async addBook( req: Request, res: Response ) {
                   try { 
                       const newBook: Book = req.body;
                       await BookStroe.add(newBook);
                       res.redirect('/books');
                   } catch (err) {
                       console.error('[ERROR ADDBOOK]', err);
                   }
            }


  static async allBooks( req: Request, res: Response ) {
                  try {
                      const books = await BookStroe.list();
                      res.render('books/list', { books });
                  } catch (err) {
                      console.error('[ERROR ALLBOOK]', err);
                  }
            }


  static async deleteBook( req: Request, res: Response ) {
                  try {
                      const { id } = req.params;
                      await BookStroe.delete(id);
                      res.redirect('/books');
                  } catch (err) {
                    console.error('[ERROR DELETEBOOK]', err);
                  }
            }

}