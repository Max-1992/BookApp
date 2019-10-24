// IMPORT MODULES
import express from 'express';
import path from 'path';
import morgan from 'morgan';
import exphbs from 'express-handlebars';

// ROUTER MODULE
import { Routes } from './routes/index.routes';



export class Application {

    app: express.Application;
    routes: Routes

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes = new Routes(this.app);
        this.staticFiles();
    }

    
    settings() {
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs',
            helpers: require('./lib/helpers')
        }));
        this.app.set('view engine', '.hbs')
    }


    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(morgan('dev'));
    }


    staticFiles() {
        this.app.use(express.static(path.join(__dirname, 'public')));
    }


    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on PORT ${process.env.PORT}`)
        })
    }

}