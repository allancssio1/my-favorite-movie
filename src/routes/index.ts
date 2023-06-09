import { Router } from "express";
import { userController } from "../controllers/UserController";
import { moviesController } from "../controllers/MoviesController";
import { authenticate } from "../auth/Authenticate";

const routes = Router()

routes.post('/user/login', userController.login)
routes.post('/user/register', userController.register)
routes.get('/movies/liked', authenticate, moviesController.moviesLikes)

export {routes}
