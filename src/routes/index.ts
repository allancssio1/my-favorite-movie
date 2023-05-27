import { Router } from "express";
import { users } from "../controllers/users";

const routes = Router()

routes.post('/user', users.login)

export {routes}
