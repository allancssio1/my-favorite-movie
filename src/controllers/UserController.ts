import { Request, Response } from "express"
import { userModule } from "../models/UserModule"

export const userController = {
  login: (req: Request, res: Response) => {
    
    userModule.login(req, res)
    
    return res.send('logou')
  }
}