import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    name: string;
    password: string;
    phone: number;
}

export default function FormRegisterUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <div className="relative">
                <input
                    {...register("name", {
                        required: true,
                    })}
                    autoFocus={true}
                    type="name"
                    id="name_input"
                    className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />

                <label
                    htmlFor="name_input"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                    {...register("password", {
                        required: true,
                    })}
                    type="password"
                    id="password_input"
                    className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />

                <label
                    htmlFor="password_input"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                    Insira sua senha
                </label>
                {errors.name && (
                    <span className="italic text-red-500 text-sm">
                        Senha é obrigatória
                    </span>
                )}
            </div>

            <div className="relative">
                <input
                    {...register("phone", {
                        required: true,
                    })}
                    type="tel"
                    id="phone_input"
                    className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />

                <label
                    htmlFor="phone_input"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                    Insira seu número
                </label>
                {errors.name && (
                    <span className="italic text-red-500 text-sm">
                        Número é obrigatório
                    </span>
                )}
            </div>

            <input type="submit" value="Cadastrar" className="border p-2" />
        </form>
    );
}
