
import { NavLink } from "react-router-dom"
import { ReactNode } from "react";


interface Props {
  link: string;
  text: string;
  icon: ReactNode
}

function SettingsNavLink({ link, text, icon }: Props) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => `w-full text-sm font-medium py-2 px-2.5
rounded-3xl active:scale-95 transition-all duration-300 flex items-center
${isActive ? "fill-white text-brand-4/80 bg-brand/20" : "text-brand-4/70 fill-brand-4/70"}`}
    >
      <div className="w-12">
        {icon}
      </div>
      {text}
    </NavLink>
  )
}

export default SettingsNavLink