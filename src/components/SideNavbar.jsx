import { Layers } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
    {
        to: "/dashboard",
        icon: <Layers />,
        title: "All Uploads",
    },
];

const SideNavbar = () => {
    return (
        <aside className="fixed inset-y-0 left-0 max-h-screen w-60 bg-white shadow-md">
            <div className="flex h-full flex-col justify-between">
                <div className="flex-grow">
                    <div className="border-b px-4 py-6 text-center">
                        <h1 className="text-xl font-bold leading-none">
                            ADMIN
                        </h1>
                    </div>
                    <div className="p-4">
                        <ul className="space-y-1">
                            {navLinks.map((navLink, index) => (
                                <NavLink
                                    to={navLink.to}
                                    key={index}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center rounded-xl bg-sky-100 px-4 py-3 text-sm font-bold text-sky-900"
                                            : "flex rounded-xl bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-sky-50"
                                    }
                                >
                                    <span className="mr-3 h-6 w-6">
                                        {navLink.icon}
                                    </span>
                                    <span>{navLink.title}</span>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideNavbar;
