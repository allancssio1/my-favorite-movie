import { randomUUID } from "crypto";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {type: String, require: true, unique: true},
  name: {type: String, require: true},
  username: {type: String, require: true, unique: true},
}, {
  timestamps: true
})

export default mongoose.model('User', UserSchema)