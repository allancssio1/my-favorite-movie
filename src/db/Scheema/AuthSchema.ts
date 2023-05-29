import { randomUUID } from "crypto";
import mongoose from "mongoose";

const UserAuthSchema = new mongoose.Schema({
  password: {type: String, require: true},
  username: {type: String, require: true, unique: true},
})

export default mongoose.model('UserAuth', UserAuthSchema)