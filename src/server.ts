import express from 'express'
import { routes } from './routes'
import { main as conn } from './db'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(routes)

conn()

app.listen(3333, () => {console.log('running')})