import { Request, Response } from "express";
import { createMovieRent } from "./createMovieRent";

export const createMovieRentController = async (req: Request, res: Response) => {
    const { movieId, userId } = req.body;

    await createMovieRent({ movieId, userId })

    return res.status(201).send();
}