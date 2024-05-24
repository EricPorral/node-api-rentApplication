import { Request, Response } from "express";
import { createMovie } from "./createMovie";

export const createMovieController = async (req: Request, res: Response) => {
    const { title, duration, releaseDate } = req.body;

    const result = await createMovie({ title, duration, releaseDate })

    return res.status(201).json(result)
}