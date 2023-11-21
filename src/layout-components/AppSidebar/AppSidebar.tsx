
import { Text } from "../../components"
import { Link, useLocation } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"
import getBaseUrl from "../../utils/base-url"

// icons
import { AppNavLinks, SettingsNavLinks } from "./components"

function AppSidebar() {
    const location = useLocation();

    return (
        <div className="bg-white max-lg:h-full h-screen overflow-y-auto grid grid-cols-1
        grid-rows-1 lg:grid-rows-[4.4rem_1fr]">

            <div className="w-full h-[4.4rem] shadow-sm shadow-black/5 mb-3 grid place-items-center max-lg:hidden">
                <Link to={ApplicationRoutes.pages.dashboard} className="flex items-center gap-x-1 justify-center">
                    <img
                        alt=""
                        loading="lazy"
                        src={getBaseUrl() + "/Logo.png"}
                        className="w-10 h-10"
                    />
                    <Text size="head4">OrbyxSpaces</Text>
                </Link>
            </div>

            <div className="flex flex-col gap-y-2 py-4 lg:px-4 overflow-y-auto">

                {
                    !location.pathname.includes(ApplicationRoutes.pages.settings)
                        ?
                        <AppNavLinks />
                        :
                        <SettingsNavLinks />
                }

            </div>

        </div>
    )
}

export default AppSidebar