
import { MobileMenu } from "../MobileMenu"
import { Button, Search, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { MdLogout } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"
import { useUploadQueueStore } from "../../stores"

function NavBar() {

    const navigate = useNavigate()
    const addFilesToFilesQueue = useUploadQueueStore(selector => selector.addNewFile)

    return (
        <div className="w-full flex items-center justify-between px-4 md:px-8 h-full shadow-sm shadow-black/5">

            <Search searchFieldAttrs={{ placeholder: "Search ...", className: "border-none py-3" }} className="max-w-sm max-lg:hidden rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.08)]" />

            <div className="flex items-center gap-x-10">
            <Link to={ApplicationRoutes.pages.dashboard} className="flex mr-0 flex-shrink-0 items-center gap-x-1 justify-center lg:hidden">
                    <img
                        alt=""
                        loading="lazy"
                        src={getBaseUrl() + "/Logo.png"}
                        className="w-10 h-10"
                    />
                    <Text size="head4">OrbyxSpaces</Text>
                </Link>

                <input
                    type="file"
                    multiple
                    className="appearance-none hidden" id="development-upload-file"
                    onChange={(e) => {
                        if(e.target.files && e.target.files?.length > 0) {
                            for (const file of e.target.files) {
                                addFilesToFilesQueue({
                                    id: file.name + file.size,
                                    date: file.lastModified.toString(),
                                    img: "",
                                    name: file.name,
                                    size: file.size.toString(),
                                    type: "image/jpeg",
                                    progress: 0,
                                    file
                                })
                            }
                        }
                    }}
                />
                <Button
                    className="px-6 shadow-lg shadow-black/10 py-3 max-md:hidden"
                    onClick={() => document.getElementById("development-upload-file")?.click()}
                >
                    <img loading="lazy" className="w-5 h-5 object-center object-cover" alt="" src={getBaseUrl() + "/icons/Upload-White.png"} />
                    Upload
                </Button>


                <Menu>

                    <MenuButton className="flex-shrink-0">
                        <div className="flex items-center gap-x-3 max-md:hidden">
                            <img
                                alt=""
                                loading="lazy"
                                src={getBaseUrl() + "/img/14.jpg"}
                                className="w-11 h-11 object-center object-cover rounded-full shadow-md shadow-black/10"
                            />
                            <Text size="subtitle2">Michel</Text>
                        </div>
                    </MenuButton>

                    <MenuList
                        rounded="2xl"
                        padding="3"
                    >

                        <MenuItem
                            onClick={() => navigate(ApplicationRoutes.pages.profile)}
                            rounded="lg"
                            py="2"
                            icon={
                                <div className="w-7 h-7 rounded-full bg-accent-orange grid place-items-center">
                                    <img
                                        alt=""
                                        src={getBaseUrl() + "/icons/User-White.png"}
                                        className="w-3.5 h-3.5"
                                    />
                                </div>
                            }
                        >
                            <Text size="subtitle2">Profile</Text>
                        </MenuItem>

                        <MenuItem
                            onClick={() => navigate(ApplicationRoutes.pages.recentFiles)}
                            rounded="lg"
                            py="2"
                            icon={
                                <div className="w-7 h-7 rounded-full bg-accent-green grid place-items-center">
                                    <img
                                        alt=""
                                        src={getBaseUrl() + "/icons/Folder-White.png"}
                                        className="w-3.5 h-3.5"
                                    />
                                </div>
                            }
                        >
                            <Text size="subtitle2">Recent Files</Text>
                        </MenuItem>

                        <MenuItem
                            onClick={() => navigate(ApplicationRoutes.pages.inviteFriend)}
                            rounded="lg"
                            py="2"
                            icon={
                                <div className="w-7 h-7 rounded-full bg-accent-pink grid place-items-center">
                                    <img
                                        alt=""
                                        src={getBaseUrl() + "/icons/Invite-Friends-White.png"}
                                        className="w-3.5 h-3.5"
                                    />
                                </div>
                            }
                        >
                            <Text size="subtitle2">Invite a Friend</Text>
                        </MenuItem>

                        <div className="w-full border-b border-b-brand-3 my-1"></div>

                        <MenuItem
                            icon={
                                <div className="w-7 h-7 rounded-full bg-accent-orange grid place-items-center">
                                    <MdLogout className="w-4 h-4 fill-white" />
                                </div>
                            }
                            rounded="lg"
                            py="2"
                            _hover={{
                                bgColor: "rgba(255,116,116,0.1)"
                            }}
                            _focus={{
                                bgColor: "rgba(255,116,116,0.1)"
                            }}
                        >
                            <Text className="text-accent-red" size="subtitle2">Logout</Text>
                        </MenuItem>

                    </MenuList>

                </Menu>

            </div>

            <div className="lg:hidden">
                <MobileMenu />
            </div>

        </div>
    )
}

export default NavBar