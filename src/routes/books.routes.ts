// IMPORTS MODULES
import { Router} from 'express';

// INICIALIZANDO ROUTER
const router: Router = Router();


// CONTROLLERS
import { BooksController } from '../controller/books/books.controller';


// ROUTES
router.get('/', BooksController.allBooks);
router.get('/add', BooksController.renderBook);
router.get('/delete/:id', BooksController.deleteBook);
router.post('/add', BooksController.addBook);





export default router;
