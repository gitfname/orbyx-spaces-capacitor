
import {
    Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalHeader
} from "@chakra-ui/react"
import { useAddContactModalStore } from "../stores"
import { Button, Text, TextField } from "../.."

function AddContactModal() {
    const isAddContactModalOpen = useAddContactModalStore(selector => selector.isAddContactModalOpen)
    const setIsAddContactModalOpen = useAddContactModalStore(selector => selector.setIsAddContactModalOpen)

    const close = () => setIsAddContactModalOpen(false)

    return (
        <Modal
            isOpen={isAddContactModalOpen}
            onClose={close}
        >
            <ModalOverlay />

            <ModalContent>

                <ModalHeader>
                    <Text size="head3">Add Contact</Text>
                </ModalHeader>

                <ModalCloseButton />

                <ModalBody className="my-3">
                    <TextField
                        placeholder="Enter email address"
                        className="outline-none border border-black/10 rounded-xl py-2.5 px-3.5"
                    />
                </ModalBody>

                <ModalFooter>
                    <div className="flex items-center gap-x-3">
                        <Button className="px-6" onClick={close}>Save</Button>
                        <Button className="px-6" onClick={close} colorSchema="ghost">Cancel</Button>
                    </div>
                </ModalFooter>

            </ModalContent>

        </Modal>
    )
}

export default AddContactModal