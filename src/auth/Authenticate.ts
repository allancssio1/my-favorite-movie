import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { jwtConfig } from "./config/auth";
import { z } from "zod";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const header = z.object({
    token: z.string()
  })

  const {token} = header.parse(req.headers) 

  if(!token) return res.status(401).json({message: 'Token é requerido'})

  const payload: any = jwt.verify(token, jwtConfig.secret)

  if(!payload) return res.status(401).json({message: 'Token inválido'})

  req.body.user = JSON.parse(payload.user)

  next()
}