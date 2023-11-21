
import { create } from "zustand"
import { produce } from "immer"


interface Props {
    isOpen: boolean;
    setIsOpen(value: boolean): void
}

const useAddNewStorageModalStore = create<Props>(set => ({
    isOpen: false,
    setIsOpen: value => set(
        produce((state: Props) => {
            state.isOpen = value
        })
    )
}))

export default useAddNewStorageModalStore