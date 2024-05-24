import { Request, Response } from "express";
import { getAllUsers } from "./getAllUsers";

export const getAllUsersController = async (req: Request, res: Response) => {
    const result = await getAllUsers();

    return res.status(201).json(result);
}