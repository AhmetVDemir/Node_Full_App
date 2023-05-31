
import { NextFunction, Request, Response } from "express";
import UserService from "../services/UsersService";



const AddUser = (req: Request, res: Response) => {
    UserService.AddUser(req.body, (item: any) => {
        if (!item.result) {
            console.log(item.result);
        }
        return res.json(item);
    });
}

const GettAllCustomer = (req:Request,res:Response) => {
    UserService.GetAllUser((item:any)=> {
        if(!item.result){
            console.log(item.result);
        }
        return res.json(item);
    });
}


export default { AddUser, GettAllCustomer };