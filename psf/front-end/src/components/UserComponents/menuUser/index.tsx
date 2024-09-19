import { useLocation, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineApps } from "react-icons/md";

export default function UserMenu() {
    const location = useLocation();

    const menuItems = [
        {
            id: "home",
            path: "/auth/user/home",
            icon: <FaHome size={26} />,
            label: "Home",
        },
        {
            id: "marcar",
            path: "/auth/user/marcarConsulta",
            icon: <MdOutlineApps size={26} />,
            label: "Marcar Consulta",
        },
    ];

    return (
        <nav className="w-full mt-2 h-96 flex flex-col justify-center">
            <ul className="flex flex-col justify-evenly w-full h-full">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`flex items-center gap-4 text-xl cursor-pointer ${
                            location.pathname === item.path
                                ? "border-y border-gray-500 text-white"
                                : ""
                        }`}
                    >
                        <Link
                            to={item.path}
                            className="flex items-center gap-4 w-full"
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
