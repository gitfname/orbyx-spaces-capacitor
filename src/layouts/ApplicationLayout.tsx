
import { ReactNode } from "react"
import NavBar from "../layout-components/NavBar"

interface Props {
    children: ReactNode
}

function ApplicationLayout({ children }: Props) {
    return (
        <div
            className="w-full h-screen overflow-hidden grid
        grid-cols-1 grid-rows-[4.4rem_calc(100%-4.4rem)]"
        >

            {/* navbar */}
            <div className="z-20">
                <NavBar />
            </div>


            {/* main section */}
            <div className="overflow-y-auto p-2 sm:p-4 !pb-16">
                {children}
            </div>

        </div>
    )
}

export default ApplicationLayout