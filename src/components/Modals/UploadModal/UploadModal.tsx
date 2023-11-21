
import { useEffect, useState } from "react"
import { Button, Text, UploadedFileCard } from "../.."
import { useUploadModalStore } from "../stores"
import {
    Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, ModalCloseButton
} from "@chakra-ui/react"
import { useUploadQueueStore } from "../../../stores"

function UploadModal() {

    const [animate, setAnimate] = useState(false)

    const isOpen = useUploadModalStore(selector => selector.isUploadModalOpen)
    const isUploading = useUploadModalStore(selector => selector.isUploading)
    const setIsUploading = useUploadModalStore(selector => selector.setIsUploading)
    const setIsUploadModalOpen = useUploadModalStore(selector => selector.setIsUploadModalOpen)
    const filesInQueue = useUploadQueueStore(selector => selector.files)
    const clearFilesInQueue = useUploadQueueStore(selector => selector.clearFiles)

    const close = () => {
        clearFilesInQueue()
        setIsUploadModalOpen(false)
        setIsUploading(false)
        setAnimate(false)
    }

    const startUploading = () => {
        setIsUploading(true)
        setTimeout(() => {
            setAnimate(true)
        }, 650);
    }

    useEffect(
        () => {
            if (filesInQueue?.length > 0) setIsUploadModalOpen(true)
        },
        [filesInQueue]
    )

    // useEffect(
    //     () => {
    //         if (isOpen) {
    //             setTimeout(() => {
    //                 setAnimate(true)
    //             }, 380);
    //         }
    //         else {
    //             setAnimate(false)
    //         }
    //     },
    //     [isOpen]
    // )

    return (
        <Modal
            isOpen={isOpen}
            onClose={close}
            size={["full", "lg", "xl"]}
            scrollBehavior="inside"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text size="head3">Uploading</Text>
                </ModalHeader>

                <ModalCloseButton />

                <ModalBody className="mt-3 space-y-4">

                    {
                        !isUploading
                            ?
                            filesInQueue?.map(file => (
                                <UploadedFileCard
                                    key={file.id}
                                    id={file.id}
                                    name={file.name}
                                    progress={0}
                                    type=""
                                    file={file.file}
                                />
                            ))
                            :
                            <div className="w-full h-1 overflow-hidden rounded-lg bg-brand/10">
                                <div
                                    className={`w-full h-full bg-brand rounded-lg -translate-x-full
                                    ${animate ? "!translate-x-0 transition-transform duration-[2500ms]" : ""}`}
                                    onTransitionEnd={close}
                                >

                                </div>
                            </div>
                    }

                    {/* <div className="flex-1 overflow-hidden rounded-lg h-1 bg-brand/20">
                        <div
                            className={`w-full h-full bg-brand rounded-lg -translate-x-full
                            ${animate ? "transition-transform duration-[2500ms] !translate-x-0" : ""}`}
                            onTransitionEnd={close}
                        >

                        </div>
                    </div> */}

                </ModalBody>

                <ModalFooter>
                    <div className="flex items-center gap-x-3">
                        {
                            !isUploading
                                ?
                                <Button onClick={startUploading} className="w-max px-6">
                                    Upload
                                </Button>
                                :
                                null
                        }
                        <Button colorSchema="ghost" onClick={close} className="w-max px-6">
                            Cancel
                        </Button>
                    </div>
                </ModalFooter>

            </ModalContent>
        </Modal>

    )
}

export default UploadModal