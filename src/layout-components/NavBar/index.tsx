
import { MobileMenu } from "../MobileMenu"
import { Button, Search, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"

function NavBar() {
    return (
        <div className="w-full flex items-center justify-between px-4 md:px-8 h-full shadow-sm shadow-black/5">

            <Search searchFieldAttrs={{ placeholder: "Search ...", className: "border-none py-3" }} className="max-w-sm rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.08)]" />

            <div className="flex items-center gap-x-10">
                <Button className="px-6 shadow-lg shadow-black/10 py-3">
                    <img loading="lazy" className="w-5 h-5 object-center object-cover" alt="" src={getBaseUrl() + "/icons/Upload-White.png"} />
                    Upload
                </Button>

                <div className="flex items-center gap-x-3 flex-shrink-0">
                    <img
                        alt=""
                        loading="lazy"
                        src={getBaseUrl() + "/img/14.jpg"}
                        className="w-11 h-11 object-center object-cover rounded-full shadow-md shadow-black/10"
                    />
                    <Text size="subtitle2">Michel</Text>
                </div>
            </div>

            <div className="lg:hidden">
                <MobileMenu />
            </div>

        </div>
    )
}

export default NavBar