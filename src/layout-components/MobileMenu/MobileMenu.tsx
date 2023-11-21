
import { AiOutlineMenu } from "react-icons/ai"
import { Button } from "../../components"
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import AppSidebar from "../AppSidebar"


function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
            >

                <DrawerOverlay />

                <DrawerContent>

                    <DrawerCloseButton className="left-4 !top-4" />

                    <DrawerBody className="mt-10">

                        <AppSidebar />

                    </DrawerBody>

                </DrawerContent>

            </Drawer>
            <Button onClick={onOpen} className="rounded-lg">
                <AiOutlineMenu className="w-4 h-4 fill-white" />
            </Button>
        </>
    )
}

export default MobileMenu