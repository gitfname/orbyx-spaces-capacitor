
import { ApplicationRoutes } from "../../../../routes"
import { BsArrowLeft, BsGearFill } from "react-icons/bs"
import { Button, SettingsNavLink } from "../../../../components"
import { useNavigate } from "react-router-dom"
import getBaseUrl from "../../../../utils/base-url"


const links = [
    {
        id: "settings-link-1",
        text: "Account Settings",
        link: ApplicationRoutes.pages.profile,
        icon: <div className="w-8 h-8 rounded-full bg-accent-orange grid place-items-center">
            <img
                alt=""
                src={getBaseUrl() + "/icons/User-White.png"}
                className="w-4 h-4"
            />
        </div>
    },
    {
        id: "settings-link-2",
        text: "Recent Files",
        link: ApplicationRoutes.pages.recentFiles,
        icon: <div className="w-8 h-8 rounded-full bg-accent-green grid place-items-center">
            <img
                alt=""
                src={getBaseUrl() + "/icons/Folder-White.png"}
                className="w-4 h-4"
            />
        </div>
    },
    {
        id: "settings-link-3",
        text: "Invite a Friend",
        link: ApplicationRoutes.pages.inviteFriend,
        icon: <div className="w-8 h-8 rounded-full bg-accent-pink grid place-items-center">
            <img
                alt=""
                src={getBaseUrl() + "/icons/Invite-Friends-White.png"}
                className="w-4 h-4"
            />
        </div>
    },
    {
        id: "settings-link-4",
        text: "Trash bin",
        link: ApplicationRoutes.pages.documents,
        icon: <div className="w-8 h-8 rounded-full bg-accent-red grid place-items-center">
            <img
                alt=""
                src={getBaseUrl() + "/icons/Trash-White.png"}
                className="w-4 h-4"
            />
        </div>
    },
    {
        id: "settings-link-5",
        text: "History",
        link: ApplicationRoutes.pages.documents,
        icon: <div className="w-8 h-8 rounded-full bg-accent-blue grid place-items-center">
            <img
                alt=""
                src={getBaseUrl() + "/icons/History-White.png"}
                className="w-4 h-4"
            />
        </div>
    }
]


function SettingsNavLinks() {
    const navigate = useNavigate()

    return (
        <>
            {
                links.map(link => (
                    <SettingsNavLink key={link.id} {...link} />
                ))
            }

            <Button
                onClick={() => navigate(ApplicationRoutes.pages.dashboard)}
                className="mt-auto w-full text-sm font-medium py-3 px-4
            rounded-3xl active:scale-95 transition-all duration-300 flex items-center
            fill-white text-white bg-brand justify-start gap-x-0"
            >
                <div className="w-9">
                    <BsArrowLeft className="w-5 h-5 fill-inherit" />
                </div>
                Back to Dashboard
            </Button>
        </>
    )
}

export default SettingsNavLinks