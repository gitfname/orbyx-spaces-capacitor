
import { MdSpaceDashboard } from "react-icons/md"
import { ApplicationRoutes } from "../../../../routes"
import { BsCameraVideo, BsFillFileEarmarkFill, BsGearFill, BsImages } from "react-icons/bs"
import { AppNavLink, Button } from "../../../../components"
import { useNavigate } from "react-router-dom"
import { AiOutlinePieChart } from "react-icons/ai"


const links = [
    {
        id: "app-nav-link-1",
        text: "Dashboard",
        link: ApplicationRoutes.pages.dashboard,
        icon: <MdSpaceDashboard className="w-5 h-5 fill-inherit" />
    },
    {
        id: "app-nav-link-2",
        text: "Documents",
        link: ApplicationRoutes.pages.documents,
        icon: <BsFillFileEarmarkFill className="w-5 h-5 fill-inherit" />
    },
    {
        id: "app-nav-link-3",
        text: "Images",
        link: ApplicationRoutes.pages.images,
        icon: <BsImages className="w-5 h-5 fill-inherit" />
    },
    {
        id: "app-nav-link-4",
        text: "Video & Audio",
        link: ApplicationRoutes.pages.videoAndAudio,
        icon: <BsCameraVideo className="w-5 h-5 fill-inherit" />
    },
    {
        id: "app-nav-link-5",
        text: "Activities",
        link: ApplicationRoutes.pages.activities,
        icon: <AiOutlinePieChart className="w-5 h-5 fill-inherit" />
    }
]

function AppNavLinks() {
    const navigate = useNavigate()

    return (
        <>
            {
                links.map(link => (
                    <AppNavLink key={link.id} {...link} />
                ))
            }

            <Button
                onClick={() => navigate(ApplicationRoutes.pages.settings)}
                className="mt-auto w-full text-sm font-medium py-3 px-4
            rounded-3xl active:scale-95 transition-all duration-300 flex items-center
            fill-white text-white bg-brand justify-start gap-x-0"
            >
                <div className="w-9">
                    <BsGearFill className="w-5 h-5 fill-inherit" />
                </div>
                Settings
            </Button>
        </>
    )
}

export default AppNavLinks