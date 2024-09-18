import bgImage from "../../assets/psf-bg.jpeg";
import FormRegisterUser from "../../components/formRegisterUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    return (
        <main className="w-screen h-screen flex">
            <section className="w-2/4 h-full p-16 flex flex-col justify-around">
                <div className="w-16 h-auto ">
                    <img src={bgImage} alt="logo" className="object-fill" />
                </div>

                <div className="flex flex-col gap-4">
                    <h1>Seja bem vindo! 🖐️</h1>
                    <p>
                        Já é cadastrado?{" "}
                        <span
                            className="underline cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            Entrar
                        </span>
                    </p>
                </div>

                <FormRegisterUser />

                <div className="w-full h-auto flex justify-between">
                    <p>©️ Leonardo Santos 2024</p>
                    <p className="underline cursor-pointer">ADM</p>
                </div>
            </section>

            <section className="w-2/4 h-full flex justify-center items-center bg-white">
                <img src={bgImage} alt="Logo PSF" />
            </section>
        </main>
    );
}
