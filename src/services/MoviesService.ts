import { movies } from "../db/db"

export const moviesService = {
  findAll: async () => {
    const moviesDB = movies

    return moviesDB ? moviesDB : []
  }
}