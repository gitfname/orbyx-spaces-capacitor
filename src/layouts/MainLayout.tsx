
import { ReactNode } from "react"

import AppSidebar from "../layout-components/AppSidebar"

interface Props {
    children: ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-[3fr_12.5fr] overflow-hidden">

            {/* sidebar */}
            <div className="max-lg:hidden">
                <AppSidebar />
            </div>


            {/* mmain sectosection */}
            {children}

        </div>
    )
}

export default MainLayout