// IMPORTS MOUDLES
import { Request, Response } from 'express';


export class HomeController {

    constructor(){}

  static index( req: Request, res: Response ) {
                  res.render('index');  
            }
}