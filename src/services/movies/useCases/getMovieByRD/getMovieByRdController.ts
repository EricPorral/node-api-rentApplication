import { Request, Response } from "express";
import { getMovieByRd } from "./getMovieByRd";

export const getMovieByRdController = async (req: Request, res: Response) => {
    const result = await getMovieByRd();

    return res.status(201).json(result);
}