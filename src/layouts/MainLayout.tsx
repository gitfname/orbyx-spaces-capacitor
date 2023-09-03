
import { ReactNode } from "react"
import { Text } from "../components"
import getBaseUrl from "../utils/base-url"
import {  NavLink } from "react-router-dom"
import { ApplicationRoutes } from "../routes"

// icons
import { MdSpaceDashboard } from "react-icons/md"
import { BsImages, BsFillFileEarmarkFill, BsCameraVideo, BsPersonFill, BsGearFill } from "react-icons/bs"

interface Props {
    children: ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <div className="w-full h-screen grid grid-cols-[3fr_12.5fr] overflow-hidden">

            {/* sidebar */}
            <div className="bg-white h-screen p-4 overflow-y-auto flex flex-col gap-y-2">

                <div className="flex items-center gap-x-1 my-3 mb-8 justify-center">
                    <img
                        alt=""
                        loading="lazy"
                        src={getBaseUrl() + "/Logo.png"}
                        className="w-10 h-10"
                    />
                    <Text size="head4">OrbyxSpaces</Text>
                </div>

                <NavLink
                    to={ApplicationRoutes.pages.dashboard}
                    className={({ isActive }) => `w-full text-sm font-medium py-3 px-4
                    rounded-3xl active:scale-95 transition-all duration-300 flex items-center
                    ${isActive ? "fill-white text-white bg-brand" : "text-brand-4/70 fill-brand-4/70"}`}
                >
                    <div className="w-9">
                        <MdSpaceDashboard className="w-5 h-5 fill-inherit" />
                    </div>
                    Dashboard
                </NavLink>

                <NavLink
                    to={ApplicationRoutes.pages.documents}
                    className={({ isActive }) => `w-full text-sm font-medium py-3 px-4
                    rounded-3xl active:scale-95 transition-all duration-300 flex items-center
                    ${isActive ? "fill-white text-white bg-brand" : "text-brand-4/70 fill-brand-4/70"}`}
                >
                    <div className="w-9">
                        <BsFillFileEarmarkFill className="w-5 h-5 fill-inherit" />
                    </div>
                    Documents
                </NavLink>

                <NavLink
                    to={ApplicationRoutes.pages.images}
                    className={({ isActive }) => `w-full text-sm font-medium py-3 px-4
                    rounded-3xl active:scale-95 transition-all duration-300 flex items-center
                    ${isActive ? "fill-white text-white bg-brand" : "text-brand-4/70 fill-brand-4/70"}`}
                >
                    <div className="w-9">
                        <BsImages className="w-5 h-5 fill-inherit" />
                    </div>
                    Images
                </NavLink>

                <NavLink
                    to={ApplicationRoutes.pages.videoAndAudio}
                    className={({ isActive }) => `w-full text-sm font-medium py-3 px-4
                    rounded-3xl active:scale-95 transition-all duration-300 flex items-center
                    ${isActive ? "fill-white text-white bg-brand" : "text-brand-4/70 fill-brand-4/70"}`}
                >
                    <div className="w-9">
                        <BsCameraVideo className="w-5 h-5 fill-inherit" />
                    </div>
                    Audio & Video
                </NavLink>

                <NavLink
                    to={ApplicationRoutes.pages.settings}
                    className={({ isActive }) => `w-full text-sm font-medium py-3 px-4
                    rounded-3xl active:scale-95 transition-all duration-300 flex items-center
                    ${isActive ? "fill-white text-white bg-brand" : "text-brand-4/70 fill-brand-4/70"}`}
                >
                    <div className="w-9">
                        <BsGearFill className="w-5 h-5 fill-inherit" />
                    </div>
                    Settings
                </NavLink>

                <NavLink
                    to={ApplicationRoutes.pages.profile}
                    className={({ isActive }) => `mt-auto w-full text-sm font-medium py-3 px-4
                    rounded-3xl active:scale-95 transition-all duration-300 flex items-center
                    ${isActive ? "fill-white text-white bg-brand" : "text-brand-4/70 fill-brand-4/70"}`}
                >
                    <div className="w-9">
                        <BsPersonFill className="w-5 h-5 fill-inherit" />
                    </div>
                    Profile
                </NavLink>

            </div>


            {/* mmain sectosection */}
            {children}

        </div>
    )
}

export default MainLayout