
import { create } from "zustand"
import { produce } from "immer"


interface Props {
    isUploadModalOpen: boolean;
    isUploading: boolean;
    setIsUploadModalOpen(value: boolean): void
    setIsUploading(value: boolean): void;
}

const useUploadModalStore = create<Props>(set => ({
    isUploadModalOpen: false,
    isUploading: false,
    setIsUploadModalOpen: value => set(
        produce((state: Props) => {
            state.isUploadModalOpen = value
        })
    ),
    setIsUploading: value => set(
        produce((state: Props) => {
            state.isUploading = value
        })
    )
}))

export default useUploadModalStore