import { randomUUID } from "crypto";
import mongoose from "mongoose";

const MoviesLikesSchema = new mongoose.Schema({
  movieId: {type: String, require: true},
  user_id: {type: String, require: true},
}, {
  timestamps: true
})

export default mongoose.model('MoviesLikes', MoviesLikesSchema)