import { movies } from "../db/db"

export const moviesService = {
  findAll: async (): Promise<any> => {
    const moviesDB = movies

    return moviesDB ? moviesDB : []
  },
  findMoviesByUserId: async (id: string): Promise<any> => {
    const moviesLiked = await movies.find({user_id: id})

    return moviesLiked ? moviesLiked : null
  }
}