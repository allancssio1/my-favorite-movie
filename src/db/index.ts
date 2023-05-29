import mongoose from "mongoose";

if(!process.env.DATABASE_URL) throw new Error("DATABASE_URL not found on .env")

export const main = async () => {try {
  mongoose.set('strictQuery', false)
  await mongoose.connect(String(process.env.DATABASE_URL))
  console.log('connected db');
  
} catch (error) {
  console.error('error db->>', error)
}}