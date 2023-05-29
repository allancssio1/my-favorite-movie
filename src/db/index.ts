// 
import mongoose from "mongoose";

export const main = async () => {try {
  mongoose.set('strictQuery', false)
  await mongoose.connect('mongodb+srv://allancssio1:i5LojP7qOeCIBDmu@db.k3x6l3q.mongodb.net/?retryWrites=true&w=majority')
  console.log('connected db');
  
} catch (error) {
  console.error('error db->>', error)
}}