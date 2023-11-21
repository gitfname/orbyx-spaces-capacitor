
import { create } from "zustand"
import { produce } from "immer"
import { FileOptions } from "../types"


interface _FileOptions extends FileOptions {
    progress: number;
    file: File;
}

interface Props {
    files: Array<_FileOptions>;
    addNewFile(data: _FileOptions): void;
    removeFromQueu(id: string): void;
    clearFiles(): void;
}


const useUploadQueueStore = create<Props>(set => ({
    files: [],
    addNewFile: data => set(
        produce((state: Props) => {
            state.files = [...state.files, data]
        })
    ),
    removeFromQueu: id => set(
        produce((state: Props) => {
            state.files = state.files.filter(file => file.id !== id)
        })
    ),
    clearFiles: () => set(
        produce((state: Props) => {
            state.files = []
        })
    )
}))

export default useUploadQueueStore