// IMPORT ROUTES
import BooksRoutes from './books.routes';
import HomeRoutes from './home.routes';

export class Routes {

    constructor( server: any ) {
        server.use('/', HomeRoutes);
        server.use('/books', BooksRoutes);
    }
}