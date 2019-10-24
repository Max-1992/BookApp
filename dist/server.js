"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
// ROUTER MODULE
const index_routes_1 = require("./routes/index.routes");
class Application {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes = new index_routes_1.Routes(this.app);
        this.staticFiles();
    }
    settings() {
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.engine('.hbs', express_handlebars_1.default({
            layoutsDir: path_1.default.join(this.app.get('views'), 'layouts'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs',
            helpers: require('./lib/helpers')
        }));
        this.app.set('view engine', '.hbs');
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default('dev'));
    }
    staticFiles() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on PORT ${process.env.PORT}`);
        });
    }
}
exports.Application = Application;
