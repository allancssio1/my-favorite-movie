if(process.env.JWT_SECRET) throw new Error('JWT_SECRET not found on .env')

export const jwtConfig = {
  secret: String(process.env.JWT_SECRET),
  expireIn: '60m'
}