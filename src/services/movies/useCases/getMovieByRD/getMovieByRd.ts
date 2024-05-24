import { Movie, Prisma } from "@prisma/client";
import { prisma } from "../../../../libs/prisma";

export const getMovieByRd = async (): Promise<Movie[]> => {
    const movies = await prisma.movie.findMany({
        orderBy: {
            releaseDate: 'desc'
        },
        include: {
            movieRent: {
                select: {
                    user: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                }
            }
        }
    });

    return movies;
}