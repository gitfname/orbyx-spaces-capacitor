
import { NavLink } from "react-router-dom"
import { ReactNode } from "react";


interface Props {
    link: string;
    text: string;
    icon: ReactNode
}

function AppNavLink({ link, text, icon }: Props) {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => `w-full text-sm font-medium py-3 px-4
rounded-3xl active:scale-95 transition-all duration-300 flex items-center
${isActive ? "fill-white text-white bg-brand" : "text-brand-4/70 fill-brand-4/70"}`}
        >
            <div className="w-9">
                {icon}
            </div>
            {text}
        </NavLink>
    )
}

export default AppNavLink