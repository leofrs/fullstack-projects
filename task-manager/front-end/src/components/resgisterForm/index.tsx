import { useForm, SubmitHandler } from "react-hook-form";
import { UserApi } from "../../api/user";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const userApi = new UserApi();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { name, email, password } = data;

    try {
      const registerApi = await userApi.register({ name, email, password });

      if (registerApi) {
        navigate("/login", { replace: true });
      } else {
        alert(
          "Não foi possível realizar o cadastro! Tente novamente e verifique as suas credenciais de acesso"
        );
      }
    } catch (error) {
      alert(
        `Error interno encontrado ao tentar realizar o login! Tente novamente mais tarde: ${error}`
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-8 w-[250px]"
    >
      <div className="relative">
        <input
          {...register("name", { required: true })}
          autoFocus={true}
          type="text"
          id="name_input"
          className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />

        <label
          htmlFor="name_input"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Insira seu nome
        </label>
        {errors.name && (
          <span className="italic text-red-500 text-sm">
            Nome é obrigatório
          </span>
        )}
      </div>

      <div className="relative">
        <input
          {...register("email", { required: true })}
          type="text"
          id="email_input"
          className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />

        <label
          htmlFor="email_input"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Insira seu email
        </label>
        {errors.email && (
          <span className="italic text-red-500 text-sm">
            E-mail é obrigatório
          </span>
        )}
      </div>

      <div className="relative">
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Insira sua senha
        </label>
        {errors.password && (
          <span className="italic text-red-500 text-sm">
            Senha é obrigatória
          </span>
        )}
      </div>

      <input
        type="submit"
        value="Cadastrar"
        className="cursor-pointer border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center  hover:border-blue-600"
      />
    </form>
  );
}

export default FormRegister;
