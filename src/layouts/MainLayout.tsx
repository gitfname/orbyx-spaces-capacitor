
import { ReactNode } from "react"
import { Button, Text } from "../components"
import getBaseUrl from "../utils/base-url"

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


                <Button className="py-3 justify-start">
                    <div className="w-7">
                        <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Dashboard-White.png"} className="w-5 h-5" />
                    </div>
                    Dashboard
                </Button>

                <Button className="py-3 shadow-none text-brand-1 hover:bg-brand hover:text-white justify-start" colorSchema="ghost">
                    <div className="w-7">
                        <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Image.png"} className="w-5 h-5" />
                    </div>
                    Images
                </Button>

                <Button className="py-3 shadow-none text-brand-1 hover:bg-brand hover:text-white justify-start" colorSchema="ghost">
                    <div className="w-7">
                        <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Video.png"} className="w-5 h-5" />
                    </div>
                    Video & Audio
                </Button>
            </div>


            {/* mmain sectosection */}
            {children}

        </div>
    )
}

export default MainLayout