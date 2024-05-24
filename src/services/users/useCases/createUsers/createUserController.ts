import { Request, Response } from "express";
import { createUser } from "./createUser";

export const createUserController = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    const result = await createUser({ name, email })

    return res.status(201).json(result)
}