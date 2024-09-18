import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router-dom";

interface IFormInput {
    name: string;
    password: string;
    phone: string;
}

export default function FormLoginUser() {
    const context = useContext(UserContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        const { setUser, setIsAuthenticated } = context;
        setUser(data.name);
        setIsAuthenticated(true);
        navigate("/");
    };

    const formatPhoneNumber = (value: string) => {
        const cleaned = ("" + value).replace(/\D/g, "");
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return value;
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setValue("phone", formattedValue);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
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
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                    {...register("password", { required: true })}
                    type="password"
                    id="password_input"
                    className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />
                <label
                    htmlFor="password_input"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                    Insira sua senha
                </label>
                {errors.password && (
                    <span className="italic text-red-500 text-sm">
                        Senha é obrigatória
                    </span>
                )}
            </div>

            <div className="relative">
                <input
                    {...register("phone", {
                        required: true,
                        pattern: {
                            value: /^\(\d{2}\) \d{5}-\d{4}$/,
                            message: "Formato inválido. Use (XX) XXXXX-XXXX.",
                        },
                    })}
                    type="tel"
                    id="phone_input"
                    onChange={handlePhoneChange}
                    className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />
                <label
                    htmlFor="phone_input"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                    Número de telefone
                </label>
                {errors.phone?.message && (
                    <span className="italic text-red-500 text-sm">
                        {errors.phone.message}
                    </span>
                )}
            </div>

            <input type="submit" value="Entrar" className="border p-2" />
        </form>
    );
}
