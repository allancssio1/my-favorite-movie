import { Request } from "express";
import { moviesService } from "../services/MoviesService";

export const moviesModels =  {
  findMoviesAll: async () => {
    const movies = moviesService.findAll()

    return movies !== null ? movies : null
    
  }
}