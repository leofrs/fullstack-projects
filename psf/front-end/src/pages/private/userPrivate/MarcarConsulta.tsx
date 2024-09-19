import UserMenu from "../../../components/UserComponents/menuUser";

export default function MarcarConsulta() {
    return (
        <main className="w-screen h-screen flex p-2 gap-2">
            <section className="border w-1/4 h-full p-8 bg-[#010433] rounded-2xl">
                <h1 className="text-center text-2xl border-b-2 p-2">PSF</h1>
                <UserMenu />
            </section>
            <section className="w-3/4 h-full flex flex-col gap-2">
                <div className="border border-[#010433] w-full h-[10%] rounded-2xl flex justify-center items-center px-2">
                    <h3 className="text-black">
                        Seja bem-vindo{" "}
                        <span className="italic text-black">Leonardo</span>
                    </h3>
                </div>
                <div className="border border-[#010433] w-full h-[90%] rounded-2xl p-4">
                    <h1 className="text-black">MArcar COnsulta form</h1>
                </div>
            </section>
        </main>
    );
}
