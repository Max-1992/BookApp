// IMPORTS MODULES
import db from 'mongoose';
import { mongodb } from './keys';


const connect = async () => {
    try {
        await db.connect(mongodb.URI, {
           useNewUrlParser: true,
           useCreateIndex: true,
           useUnifiedTopology: true 
        });
        console.log('DataBase is connected')
   } catch (err) {
       console.error('[ERROR_DB]', err)
   }
}

export default connect;