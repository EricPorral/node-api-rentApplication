import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../libs/prisma"
import { Prisma } from '@prisma/client'


export const createMovie = async ({ title, duration, releaseDate }: Prisma.MovieCreateInput) => {
    // Verificar se o usuário já existe
    const movieAlreadyExists = await prisma.movie.findUnique({
        where: {
            title
        }
    });

    if (movieAlreadyExists) {
        throw new AppError("Movie already exists");
    }

    //criar o usuário
    const movie = await prisma.movie.create({
        data: { title, duration, releaseDate }
    });

    return movie;
}