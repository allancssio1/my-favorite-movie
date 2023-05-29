import { moviesService } from "../services/MoviesService";

export const moviesModels =  {
  findMoviesAll: async () => {
    const movies = await moviesService.findAll()

    return movies !== null ? movies : null
    
  }
}