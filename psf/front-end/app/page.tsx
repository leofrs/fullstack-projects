import LoginPatientForm from "@/components/forms/loginPatientForm";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen max-h-screen">
            <section className="flex w-full h-full">
                <div className="w-2/4 h-full p-8">
                    <Image
                        src="/assets/psf-bg.jpeg"
                        height={1000}
                        width={1000}
                        alt="PSF logo"
                        className="mb-12 h-10 w-fit"
                    />

                    <LoginPatientForm />

                    <div className="absolute bottom-8 w-[45%] ">
                        <div className="flex justify-between">
                            <p className="cursor-default italic text-gray-400">
                                ©️ Leonardo Santos 2024
                            </p>
                            <p>ADMIN</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/4 h-full bg-white flex justify-center items-center">
                    <Image
                        src="/assets/psf-bg.jpeg"
                        height={1000}
                        width={1000}
                        alt="PSF logo"
                    />
                </div>
            </section>
        </div>
    );
}
