import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {type: String, require: true},
  username: {type: String, require: true, unique: true},
}, {
  timestamps: true
})

export default mongoose.model('User', UserSchema)