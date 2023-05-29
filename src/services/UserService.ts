import { randomUUID } from "crypto"
import { hash, compare } from 'bcryptjs'
import UserSchema from "../db/Scheema/UserSchema"
import { IUser, IUserAuth } from "../interfaces"
import { users, usersAuth } from "../db/db"

export const userService = {
  create: async (username: string, password: string, name: string): Promise<boolean> => {
    users.push({id: randomUUID(), username, name, createdAt: new Date()})
    usersAuth.push({username, password: await hash(password, 8) })
    return true
  },
  findUserOnAuth: async (username: string, password: string): Promise<boolean> => {
    const user = await usersAuth.find(async user => user && user.username === username)
    
    const comparete = user && await compare(password, user?.password)
    
    return comparete ? true : false
  },
  findUser: async (username: string): Promise<IUser | null> => {
    const user = users.find(user => user && user.username === username)
      
    return user ? user : null
  }
}