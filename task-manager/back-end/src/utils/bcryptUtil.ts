import bcrypt from "bcrypt";

const saltRounds = Number(process.env.SALTS_ROUNDS);

export async function hashPassword(password: string): Promise<string> {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw new Error("Erro ao criar hash da senha.");
  }
}

export async function comparePassword(
  password: string,
  hashPassword: string
): Promise<boolean> {
  try {
    const isMatch = await bcrypt.compare(password, hashPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Erro ao comparar senha.");
  }
}
