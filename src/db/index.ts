import mongoose from "mongoose";
import { env } from 'node:process'

export const main = async () => {
  if(!process.env.DATABASE_URL) {throw new Error("DATABASE_URL not found on .env")}
  try {
  mongoose.set('strictQuery', false)
  await mongoose.connect(String(process.env.DATABASE_URL))
  console.log('connected db');
  
} catch (error) {
  console.error('error db->>', error)
}}