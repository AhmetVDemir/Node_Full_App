//#region Imports

import express, { Router } from "express";
import UserController from "../api/UserController";


//#endregion

//#region Constructers

const UserRouter: Router = express.Router();

//#endregion

//#region Routes

UserRouter.get("/AddArticle", UserController.AddUser);
UserRouter.get("/GetAllUser",UserController.GettAllCustomer);

//#endregion

export { UserRouter } 