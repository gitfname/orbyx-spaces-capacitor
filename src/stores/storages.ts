
import { create } from "zustand"
import { produce } from "immer"
import { StorageOptions } from "../types"
import getBaseUrl from "../utils/base-url"


type updateStorage__dataPayload = "id"

interface Props {
    storages: Array<StorageOptions>
    newStorage(data: StorageOptions): void;
    removeStorage(id: string): void;
    updateStorage(id: string, data: Pick<StorageOptions, Exclude<keyof StorageOptions, updateStorage__dataPayload>>): void;
}

const useStoragesStore = create<Props>(set => ({
    storages: [
        {
            id: "storage-1",
            capacity: "15 GB",
            size: "5.8 GB",
            icon: getBaseUrl() + "/icons/google-drive-48.png",
            lastUpdated: "2023/10/11 - 15:53",
            name: "Google Drive"
        },
        {
            id: "storage-2",
            capacity: "10 GB",
            size: "9 GB",
            icon: getBaseUrl() + "/icons/onedrive-48.png",
            lastUpdated: "2023/10/11 - 15:53",
            name: "OneDrive"
        },
        {
            id: "storage-3",
            capacity: "30 GB",
            size: "9 GB",
            icon: getBaseUrl() + "/icons/dropbox-48.png",
            lastUpdated: "2023/10/11 - 15:53",
            name: "Dropbox"
        },
        {
            id: "storage-4",
            capacity: "128 GB",
            size: "49 GB",
            icon: getBaseUrl() + "/icons/server-64.png",
            lastUpdated: "2023/10/11 - 15:53",
            name: "Personal Server"
        }
    ],
    newStorage: data => set(
        produce((state: Props) => {
            state.storages = [...state.storages, data]
        })
    ),
    removeStorage: id => set(
        produce((state: Props) => {
            state.storages = state.storages.filter(storage => storage.id !== id)
        })
    ),
    updateStorage: (id, data) => set(
        produce((state: Props) => {
            const targetStorageIndex = state.storages.findIndex(storage => storage.id === id)
            if(targetStorageIndex === -1) return
            state.storages[targetStorageIndex] = {
                ...state.storages[targetStorageIndex],
                ...data
            }
        })
    )
}))

export default useStoragesStore