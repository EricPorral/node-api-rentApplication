import { User } from "@prisma/client";
import { prisma } from "../../../../libs/prisma";

export const getAllUsers = async (): Promise<User[]> => {
    const users = await prisma.user.findMany({
        include: {
            movieRent: {
                select: {
                    movie: {
                        select: {
                            title: true
                        }
                    }
                }
            }
        }
    });

    return users;
}