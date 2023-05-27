import { Router } from "express";
import { userController } from "../controllers/UserController";

const routes = Router()

routes.post('/user', userController.login)

export {routes}
