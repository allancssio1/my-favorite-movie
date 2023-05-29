import { Request, Response } from "express"
import { userModule } from "../models/UserModule"
import { users } from "../db/db"

export const userController = {
  register: async (req: Request, res: Response): Promise<Response> => {
    try {
      const userCreated = await userModule.register(req)

      return res.status(userCreated ? 201 : 400).json({
        message: userCreated ? 'Usuário criado com sucesso.' : 'Usuário já existe.'
      })
    } catch (error) {
      return res.status(400).json(error)      
    }
  },
  login: async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await userModule.login(req)

      return res.status(response.user !== null ? 200 : 400).json({
        message: response !== null ? `Bem vindo, ${response.user.name}.`: 'Dados de acesso errados!',
        token: response.token
      })
    } catch (error) {
      return res.status(400).json(error)      
    }
  },
  all: async (req: Request, res: Response) => {
    const usersAll = await users.find() 
    return res.status(200).json(usersAll)
  }
}