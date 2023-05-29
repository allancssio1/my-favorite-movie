import { hash, compare } from 'bcryptjs'
import { users, usersAuth } from "../db/db"

export const userService = {
  create: async (username: string, password: string, name: string): Promise<boolean> => {
    const passwordHash = await hash(password, 8)
    await usersAuth.create({username, password: passwordHash})
    await users.create({username, name});
    return true
  },
  findUserOnAuth: async (username: string, password: string): Promise<boolean> => {
    const user = await usersAuth.findOne({username})
    
    const comparete = user && user?.password && await compare(password, user?.password)
    
    return comparete ? true : false
  },
  findUser: async (username: string): Promise<any> => {
    const user = await users.findOne({username})
      
    return user ? user : null
  }
}