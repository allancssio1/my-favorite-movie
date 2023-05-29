import { Request } from "express"
import { z } from "zod"
import { userService } from "../services/UserService"
import jwt from "jsonwebtoken"
import {jwtConfig} from '../auth/config/auth'
import { IUser } from "../interfaces"

export const userModule = {
  register: async (req: Request): Promise<boolean> => {
    const body = z.object({
      username: z.string({
        required_error: "Nome de usuário é obrigatório",
        invalid_type_error: "Nome de usuário precisa ser do formato de texto.",
      }),
      password: z.string({
        required_error: "Senha é obrigatório",
        invalid_type_error: "Senha precisa ser do formato de texto",
      }),
      name: z.string({
        required_error: "Nome do usuário é obrigatório",
        invalid_type_error: "Nome do usuário ser do formato de texto",
      })
    })

    const {username, password, name} = body.parse(req.body)

    const userAlreadyExists = await userService.findUser(username)
    
    if(userAlreadyExists !== null) return false
    
    await userService.create(username, password, name)
    return true 
  },
  login: async (req: Request): Promise<any> => {
    const body = z.object({
      username: z.string({
        required_error: "Nome de usuário é obrigatório",
        invalid_type_error: "Nome de usuário precisa ser do formato de texto.",
      }),
      password: z.string({
        required_error: "Senha é obrigatório",
        invalid_type_error: "Senha precisa ser do formato de texto",
      })
    })
    const {username, password} = body.parse(req.body)
    
    const userAuth = await userService.findUserOnAuth(username, password) 

    if (!userAuth) {
      return null
    }

    const user = await userService.findUser(username)

    const token = jwt.sign(
      {
        user: JSON.stringify(user),
      },
      jwtConfig.secret,
      {expiresIn: jwtConfig.expireIn}
      )

    return user !== null ? {user, token} : null
  }
}