
import { useEffect, useRef } from "react";
import { Button, DetailCard1, Text, TextField } from "..";
import { isImageFile } from "../../utils/isImageFile";
import { getFileTypeImage } from "../../utils/getFileTypeImage";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Checkbox, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import getBaseUrl from "../../utils/base-url";


interface Props {
    id: string;
    name: string;
    type: string;
    progress: number;
    file: File
}

function UploadedFileCard({
    id, name, type, progress, file
}: Props) {

    const imageRef = useRef<HTMLImageElement>(null);
    const privacyModal = useDisclosure()

    useEffect(
        () => {
            if (imageRef.current && isImageFile(name)) {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    if (reader.result) {
                        imageRef.current?.setAttribute("src", reader.result.toString())
                    }
                })
                reader.readAsDataURL(file)
            }
        },
        []
    )

    return (

        <div className="w-full p-3 border border-black/10 rounded-xl">
            {
                isImageFile(name)
                    ?
                    <img
                        alt=""
                        ref={imageRef}
                        className="w-full aspect-video rounded-xl object-center object-cover"
                    />
                    :
                    <div className="flex items-center gap-x-3">
                        <div className="w-10 h-10 bg-black/5 rounded-xl grid place-items-center">
                            <img
                                alt=""
                                src={getFileTypeImage(name)}
                                className="w-8 h-8"
                            />
                        </div>
                        <Text size="subtitle2">{name}</Text>
                    </div>
            }
            <div className="mt-5">

                <Text size="subtitle2">{(file.size / 1024 / 1024).toFixed(1)} MB</Text>

                <textarea
                    rows={3}
                    className="outline-none text-sm text-brand-4 font-normal
                    border border-black/10 rounded-xl w-full p-3 mt-4"
                    placeholder="Write anything"
                >
                </textarea>

                <Accordion
                    className="mt-4"
                    borderColor="transparent"
                    allowMultiple
                >
                    <AccordionItem>
                        <AccordionButton
                            width="max"
                            rounded="xl"
                            _expanded={{
                                bgColor: "blackAlpha.100"
                            }}

                        >
                            <Text size="subtitle2">Advanced options</Text>
                            &nbsp;&nbsp;
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel
                            mt="1"
                            borderLeft="1px solid rgba(0,0,0,0.08)"
                        >
                            <TextField
                                placeholder="Version (e.g 3.0.0)"
                                className="mt-4 outline-none border border-black/20 rounded-xl px-3 w-9/12 md:w-8/12"
                            />

                            <Button onClick={privacyModal.onOpen} className="w-max rounded-lg py-2 mt-4">
                                Access control
                            </Button>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>


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

            </div>
        </div>

    )
}

export default UploadedFileCard