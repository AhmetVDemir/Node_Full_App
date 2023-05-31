
import express, { Router } from "express";
import UserController from "../api/UserController";


const UserRouter: Router = express.Router();



UserRouter.post("/AddUser", UserController.AddUser);
UserRouter.get("/GetAllUser",UserController.GettAllCustomer);


export { UserRouter } 