import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../libs/prisma"
import { Prisma } from '@prisma/client'


export const createUser = async ({ name, email }: Prisma.UserCreateInput) => {
    // Verificar se o usuário já existe
    const userAlreadyExists = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (userAlreadyExists) {
        throw new AppError("User already exists");
    }

    //criar o usuário
    const user = await prisma.user.create({
        data: { name, email }
    });

    return user;
}