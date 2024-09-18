import { useForm, SubmitHandler } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js";

interface IFormInput {
    name: string;
    password: string;
    phone: E164Number | undefined;
}

export default function FormLoginUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    const handlePhoneChange = (phone: E164Number | undefined) => {
        setValue("phone", phone);
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

            <PhoneInput
                placeholder="(83) 99999-9999"
                defaultCountry="BR"
                countries={["BR"]}
                value={undefined}
                onChange={handlePhoneChange}
                className="border border-gray-500 p-2 rounded-lg"
            />
            {errors.phone && (
                <span className="italic text-red-500 text-sm">
                    Número é obrigatório
                </span>
            )}

            <input type="submit" value="Entrar" className="border p-2" />
        </form>
    );
}
