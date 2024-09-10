import { CreateUserType } from "../@types/custom-types";
import { prismaService } from "./index.service";

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
}

export default UserPrisma;
