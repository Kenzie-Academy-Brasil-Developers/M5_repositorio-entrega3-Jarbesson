import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export class validateBody{
    static execute(schema: AnyZodObject){
        return (req:Request, _:Response, next:NextFunction):void => {
            req.body = schema.parse(req.body);

            return next();
        }
    }
}