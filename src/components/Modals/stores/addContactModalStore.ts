
import { create } from "zustand"
import { produce } from "immer"


interface Props {
    isAddContactModalOpen: boolean;
    setIsAddContactModalOpen(value: boolean): void;
    toggleIsAddContactModalOpen(): void;
}

const useAddContactModalStore = create<Props>(set => ({
    isAddContactModalOpen: false,
    setIsAddContactModalOpen: value => set(
        produce((state: Props) => {
            state.isAddContactModalOpen = value
        })
    ),
    toggleIsAddContactModalOpen: () => set(
        produce((state: Props) => {
            state.isAddContactModalOpen = !state.isAddContactModalOpen
        })
    )
}))

export default useAddContactModalStore