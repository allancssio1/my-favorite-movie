import { Request, Response } from "express";
import { moviesModels } from "../models/MoviesModels";

export const moviesController = {
  moviesLikes: async (req: Request, res: Response) => {
    const {user} = req.body
    const id = user._id

    const movies = user && await moviesModels.findMoviesLikes(id)

    if(movies === null) return res.json([])

    return res.json(movies)
  }
}