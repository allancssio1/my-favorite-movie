import { Request, Response } from "express";
import { moviesModels } from "../models/MoviesModels";

export const moviesController = {
  findAll: async (req: Request, res: Response) => {
    const {user} = req.body

    
    const movies = user && moviesModels.findMoviesAll()

    if(movies === null) return res.json([])

    return res.json(movies)
  }
}