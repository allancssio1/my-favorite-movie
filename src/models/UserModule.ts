import { Request, Response } from "express"
import { z } from "zod"

export const userModule = {
  login: (req: Request, res: Response) => {
    const body = z.object({
      username: z.string({required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
      password: z.string()
    })

    const {username, password} = body.parse(req.body)

    if(!username || !password) return res.status(401).json({
      message: 'Campos de usuário e senha são obrigatórios!',
      success: false
    })

    
   
    return 
    
  }
}