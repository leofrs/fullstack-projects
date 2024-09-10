import { PrismaClient } from "@prisma/client";
import { CreateUserType } from "../@types/custom-types";

export const prismaService = new PrismaClient();

class UserPrisma {
  async createUser({ name, email, password }: CreateUserType) {
    try {
      const create = await prismaService.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
      return create;
    } catch (error) {
      console.error(
        `Error ao criar o usúario vindo do Prisma Service: ${error}`
      );
    } finally {
      await prismaService.$disconnect();
    }
  }

  async getUser(email: string) {
    try {
      const get = await prismaService.user.findUnique({
        where: {
          email: email,
        },
      });
      return get;
    } catch (error) {
      console.error(
        `Error ao buscar o usúario vindo do Prisma Service: ${error}`
      );
    } finally {
      await prismaService.$disconnect();
    }
  }

  async getAllUsers() {
    try {
      const getAll = await prismaService.user.findMany();
      return getAll;
    } catch (error) {
      console.error(
        `Error ao buscar todos os usúario vindo do Prisma Service: ${error}`
      );
    } finally {
      await prismaService.$disconnect();
    }
  }
}

export default UserPrisma;
