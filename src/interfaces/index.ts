export interface IUserAuth {
  username: string
  password: string
}

export interface IUser {
  username: string
  name: string
  id: string
  createdAt?: Date
  token?: () => string
}