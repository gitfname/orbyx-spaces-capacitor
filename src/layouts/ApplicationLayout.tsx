
import { ReactNode } from "react"
import NavBar from "../layout-components/NavBar"

interface Props {
    children: ReactNode
}

function ApplicationLayout({children}: Props) {
  return (
    <div
        className="w-full h-screen overflow-hidden grid
        grid-cols-1 grid-rows-[3.6rem_calc(100%-3.6rem)]"
    >

        {/* navbar */}
        <div className="">
            <NavBar />
        </div>


        {/* main section */}
        <div className="overflow-y-auto">
            {children}
        </div>

    </div>
  )
}

export default ApplicationLayout