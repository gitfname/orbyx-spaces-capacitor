

import { cva, type VariantProps } from "class-variance-authority"
import React, { HTMLAttributes, ReactElement, useState } from "react"
import { twMerge } from "tailwind-merge"
import { FileOptions } from "../../../types"
import { Button, DetailCard1, Text, TextField } from "../.."
import { BsThreeDotsVertical } from "react-icons/bs"
import { Menu, MenuButton, MenuList, MenuItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter, Checkbox, FormLabel } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import getBaseUrl from "../../../utils/base-url"

const variants = cva(
    `py-2.5 px-4 rounded-xl flex select-none flex-col gap-y-3 border border-black/10 transition-colors`,
    {
        variants: {
            colorSchema: {
                "dark": "bg-brand-4"
            },
            clickable: {
                clickable: "hover:bg-brand/[0.05] cursor-pointer",
                "": ""
            }
        }
    }
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    data: FileOptions;
    imgWrapper?: ReactElement;
    imgClassName?: string;
    isClickable?: boolean;
    link?: string;
}


function FileCard2({ data, link, isClickable = false, className, colorSchema, imgWrapper, imgClassName, ...props }: Props) {

    const [_isClickable, setIsClickable] = useState(isClickable)
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const privacyModal = useDisclosure()


    return (
        <div
            onClick={() => link && link.trim() !== "" && navigate(link)}
            className={twMerge(variants({ className, colorSchema, clickable: _isClickable ? "clickable" : "" }))}
            {...props}
        >

            <div
                className="flex items-center justify-between gap-x-3"
            >
                {
                    imgWrapper
                        ?
                        React.cloneElement(imgWrapper, {}, <>
                            {
                                typeof data.img === "string"
                                    ?
                                    <img
                                        alt=""
                                        src={data.img}
                                        className={twMerge("w-14 h-14 rounded-full object-center object-cover", imgClassName)}
                                    />
                                    :
                                    data.img
                            }
                        </>)
                        :
                        typeof data.img === "string"
                            ?
                            <img
                                alt=""
                                src={data.img}
                                className={twMerge("w-14 h-14 rounded-full object-center object-cover", imgClassName)}
                            />
                            :
                            data.img
                }

                <div className="flex flex-col items-center justify-between self-stretch">

                    <Menu>

                        <MenuButton
                            onClick={e => e.stopPropagation()}
                            onMouseEnter={() => setIsClickable(false)}
                            onMouseLeave={() => setIsClickable(true)}
                            className="flex-shrink-0"
                        >
                            <button
                                className="appearance-none p-1.5 bg-brand/10 rounded-lg active:scale-95
                                transition-all duration-200 hover:bg-brand/20"
                            >
                                <BsThreeDotsVertical className="w-4 h-4 fill-brand-4/75" />
                            </button>
                        </MenuButton>

                        <MenuList
                            onClick={e => e.stopPropagation()}
                            rounded="2xl"
                            padding="3"
                            minWidth="64"
                            shadow="0 0 20px rgba(0,0,0,0.12)"
                        >

                            <Text size="head5" className="my-2 mb-3">{data.name}</Text>

                            <MenuItem
                                rounded="lg"
                                py="2"
                            >
                                <Text size="subtitle2">Rename</Text>
                            </MenuItem>

                            <div className="w-full border-b border-b-brand-3 my-1"></div>

                            <MenuItem
                                rounded="lg"
                                py="2"
                            >
                                <Text size="subtitle2">Details</Text>
                            </MenuItem>

                            <div className="w-full border-b border-b-brand-3 my-1"></div>

                            <MenuItem
                                rounded="lg"
                                py="2"
                            >
                                <Text size="subtitle2">Share</Text>
                            </MenuItem>

                            <div className="w-full border-b border-b-brand-3 my-1"></div>

                            <MenuItem
                                rounded="lg"
                                py="2"
                            >
                                <Text size="subtitle2">Download</Text>
                            </MenuItem>

                            <div className="w-full border-b border-b-brand-3 my-1"></div>

                            <MenuItem
                                onClick={privacyModal.onOpen}
                                rounded="lg"
                                py="2"
                            >
                                <Text size="subtitle2">Privacy</Text>
                            </MenuItem>

                            <div className="w-full border-b border-b-brand-3 my-1"></div>

                            {/* privacy modal ( it is only for development purpose ) */}
                            <Modal
                                isOpen={privacyModal.isOpen}
                                onClose={privacyModal.onClose}
                                size={["full", "xl", "3xl"]}
                                scrollBehavior="inside"
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>
                                        <Text size="head3">Privacy</Text>
                                        <Text size="subtitle2" className="mt-1">Who can see this file ?</Text>
                                    </ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <div className="space-y-0.5 pb-4">

                                            <FormLabel htmlFor="user-1" className="!flex items-center gap-x-3.5">
                                                <Checkbox id="user-1" />
                                                <DetailCard1
                                                    img={getBaseUrl() + "/img/1.jpg"}
                                                    title="Sara"
                                                    subtitle=""
                                                    subtitleSlot="end"
                                                    className="border-none cursor-pointer hover:bg-black/5"
                                                />
                                            </FormLabel>

                                            <FormLabel htmlFor="user-2" className="!flex items-center gap-x-3.5">
                                                <Checkbox id="user-2" />
                                                <DetailCard1
                                                    img={getBaseUrl() + "/img/2.jpg"}
                                                    title="Reza"
                                                    subtitle=""
                                                    subtitleSlot="end"
                                                    className="border-none cursor-pointer hover:bg-black/5"
                                                />
                                            </FormLabel>

                                            <FormLabel htmlFor="user-3" className="!flex items-center gap-x-3.5">
                                                <Checkbox id="user-3" />
                                                <DetailCard1
                                                    img={getBaseUrl() + "/img/3.jpg"}
                                                    title="Mariam"
                                                    subtitle=""
                                                    subtitleSlot="end"
                                                    className="border-none cursor-pointer hover:bg-black/5"
                                                />
                                            </FormLabel>

                                            <FormLabel htmlFor="user-4" className="!flex items-center gap-x-3.5">
                                                <Checkbox id="user-4" />
                                                <DetailCard1
                                                    img={getBaseUrl() + "/img/4.jpg"}
                                                    title="Alice"
                                                    subtitle=""
                                                    subtitleSlot="end"
                                                    className="border-none cursor-pointer hover:bg-black/5"
                                                />
                                            </FormLabel>

                                            <FormLabel htmlFor="user-5" className="!flex items-center gap-x-3.5">
                                                <Checkbox id="user-5" />
                                                <DetailCard1
                                                    img={getBaseUrl() + "/img/5.jpg"}
                                                    title="Mahdi"
                                                    subtitle=""
                                                    subtitleSlot="end"
                                                    className="border-none cursor-pointer hover:bg-black/5"
                                                />
                                            </FormLabel>
                                        </div>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>

                            <MenuItem
                                onClick={onOpen}
                                rounded="lg"
                                py="2"
                            >
                                <Text size="subtitle2">Comments</Text>
                            </MenuItem>

                            {/* comments modal ( it is only for development purpose ) */}
                            <Modal
                                isOpen={isOpen}
                                onClose={onClose}
                                size={["full", "xl", "3xl"]}
                                scrollBehavior="inside"
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>
                                        <Text size="head3">Comments</Text>
                                    </ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <div className="space-y-0.5">
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/1.jpg"}
                                                title="Impressive quality for such an affordable price!"
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/2.jpg"}
                                                title="Extremely user-friendly and intuitive to use."
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/3.jpg"}
                                                title="This product exceeded my expectations - highly recommended!"
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/4.jpg"}
                                                title="The design is sleek and modern, making it a great addition to any space."
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/5.jpg"}
                                                title="I love how versatile this product is, it can be used for multiple purposes."
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/6.jpg"}
                                                title="Great attention to detail in the craftsmanship - it feels durable and long-lasting."
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/7.jpg"}
                                                title="The customer service was outstanding, they went above and beyond to assist me."
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                            <DetailCard1
                                                img={getBaseUrl() + "/img/8.jpg"}
                                                title="With its compact size, this product is perfect for travel or on-the-go use."
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />

                                            <DetailCard1
                                                img={getBaseUrl() + "/img/9.png"}
                                                title="The performance of this product is truly impressive, delivering exceptional results."
                                                subtitle="10 min ago"
                                                subtitleSlot="end"
                                                className="border-none"
                                            />
                                        </div>
                                    </ModalBody>
                                    <ModalFooter className="shadow-[0_-1px_6px_rgba(0,0,0,0.09)] flex items-center gap-x-3">
                                        <TextField
                                            placeholder="What you think ?"
                                            className="outline-none border border-black/20 rounded-xl px-3 flex-[4]"
                                        />
                                        <Button className="flex-1">
                                            Send
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>

                            <div className="w-full border-b border-b-brand-3 my-1"></div>

                            <MenuItem
                                rounded="lg"
                                py="2"
                            >
                                <Text size="subtitle2">Move to Trash</Text>
                            </MenuItem>

                        </MenuList>

                    </Menu>



                    <Text
                        size="caption"
                        className={`font-medium ${colorSchema === "dark" ? "text-brand-3" : "text-brand-4"}`}
                    >
                        {data.size}
                    </Text>
                </div>

            </div>

            <div>
                <Text size="subtitle2" className={colorSchema === "dark" ? "text-brand-3" : ""}>{data.name}</Text>
                <Text size="caption" className={`mt-1.5 text-brand-1 ${colorSchema === "dark" ? "text-brand-3/50" : ""}`}>{data.date}</Text>
            </div>


        </div>
    )
}

export default FileCard2