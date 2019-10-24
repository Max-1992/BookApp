// IMPORTS MOUDLES
import { Application } from './server';
import dotenv from 'dotenv';



// INITIALIZATIONS
const app = new Application();
dotenv.config();


// DATABASE IS CONNECT
import db from './db-connect';
db();

// START THE SERVER
app.start();