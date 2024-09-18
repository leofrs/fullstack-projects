import { FaHome, FaHistory } from "react-icons/fa";
import { MdOutlineApps, MdExitToApp } from "react-icons/md";

export default function HomeUserPrivate() {
    return (
        <main className="w-screen h-screen flex p-2 gap-2">
            <section className="border w-1/4 h-full p-8 bg-[#010433] rounded-2xl">
                <h1 className="text-center text-2xl border-b-2 p-2">PSF</h1>
                <nav className="w-full mt-2 h-96 flex flex-col justify-center">
                    <ul className="flex flex-col justify-evenly w-full h-full">
                        <li className="flex items-center gap-4 text-xl cursor-pointer">
                            <FaHome size={26} />
                            Home
                        </li>
                        <li className="flex items-center gap-4 text-xl cursor-pointer">
                            <MdOutlineApps size={26} />
                            Marcar Consulta
                        </li>
                        <li className="flex items-center gap-4 text-xl cursor-pointer">
                            <FaHistory />
                            Historico Médico
                        </li>
                        <li className="flex items-center gap-4 text-xl cursor-pointer">
                            <MdExitToApp />
                            Sair
                        </li>
                    </ul>
                </nav>
            </section>
            <section className=" w-3/4 h-full flex flex-col gap-2">
                <div className="border border-[#010433] w-full h-[10%] rounded-2xl flex justify-center items-center px-2">
                    <h3 className="text-black">
                        Seja bem vindo{" "}
                        <span className="italic text-black">Leonardo</span>
                    </h3>
                </div>
                <div className="border border-[#010433] w-full h-[90%] rounded-2xl"></div>
            </section>
        </main>
    );
}
