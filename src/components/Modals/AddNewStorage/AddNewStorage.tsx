
import {
    Modal, ModalContent, ModalOverlay, ModalBody, ModalCloseButton, ModalHeader
} from "@chakra-ui/react"
import { useAddNewStorageModalStore } from "../stores"
import { Button, InputField, Text, TextField } from "../.."
import { useStoragesStore } from "../../../stores"
import { v4 as uuidv4 } from "uuid"
import { useRef } from "react"
import getBaseUrl from "../../../utils/base-url"

function AddNewStorage() {

    const isOpen = useAddNewStorageModalStore(selector => selector.isOpen)
    const setisOpen = useAddNewStorageModalStore(selector => selector.setIsOpen)
    const newStorage = useStoragesStore(selector => selector.newStorage)
    const storageNameRef = useRef<HTMLInputElement>(null)

    const onClose = () => setisOpen(false)
    const handleOnSaveClicked = () => {
        if (storageNameRef.current?.value) {
            newStorage({
                id: uuidv4(),
                capacity: "100 GB",
                size: "0 GB",
                icon: getBaseUrl() + "/icons/server-64.png",
                lastUpdated: "2023/11/9 13:58",
                name: storageNameRef.current.value
            })
            onClose()
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={["full", "lg"]}
        >

            <ModalOverlay />

            <ModalContent>

                <ModalHeader>

                    <Text size="head3">
                        Add new Storage
                    </Text>

                </ModalHeader>

                <ModalCloseButton />

                <ModalBody pb="4">
                    <InputField colorSchema="white" labelText="Storage Name" className="p-3 w-full max-w-full">
                        <TextField ref={storageNameRef} placeholder="Enter a Name" className="outline-none" />
                    </InputField>

                    <Button
                        onClick={handleOnSaveClicked}
                        className="w-max px-6 mt-5"
                    >
                        Save
                    </Button>
                </ModalBody>

            </ModalContent>

        </Modal>
    )
}

export default AddNewStorage