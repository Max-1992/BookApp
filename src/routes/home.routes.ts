// IMPORTS MODULES
import { Router} from 'express';

// INICIALIZANDO ROUTER
const router: Router = Router();


// CONTROLLERS
import { HomeController } from '../controller/home/home.controller';




// ROUTES
router.get('/', HomeController.index);



export default router;