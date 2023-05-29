import { moviesService } from "../services/MoviesService";

export const moviesModels =  {
  findMoviesLikes: async (id: string) => {
    const movies = await moviesService.findMoviesByUserId(id)

    return movies !== null ? movies : null
    
  }
}