import { prisma } from "../../../../libs/prisma";
import { AppError } from "../../../../errors/appError";

type movieRent = {
    movieId: number;
    userId: number;
}

export const createMovieRent = async ({ movieId, userId }: movieRent): Promise<void> => {
    //verificar se o filme existe
    const movieExist = await prisma.movie.findUnique({
        where: { id: movieId }
    });

    if(!movieExist) {
        throw new AppError('Movie does not exist!');
    }

    // verificar se o filme já não está alugado por outra pessoa
    const movieAlreadyRented = await prisma.movieRent.findFirst({
        where: {
            movieId
        }
    });

    if(movieAlreadyRented) {
        throw new AppError('Movie already rented!');
    }

    // verificar se o usuário existe
    const userExist = await prisma.user.findUnique({
        where: { id: userId}
    });

    if(!userExist) {
        throw new AppError('User doest not exist!');
    }

    // criar a locação
    await prisma.movieRent.create({
        data: {
            movieId,
            userId
        }
    });
}