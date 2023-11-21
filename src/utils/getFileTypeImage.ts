
import getBaseUrl from "./base-url";


export function getFileTypeImage(name: string): string {

    const supported_types = (import.meta.env.VITE_PUBLIC_SUPPORTED_FILE_TYPES as string).split(",");
    const fileType = name.split(".")[1]

    if(supported_types.includes(fileType)) {
        return getBaseUrl() + "/file-icons/all/"+fileType+".png"
    }
    else {
        return getBaseUrl() + "/file-icons/all/unknown.png"
    }

}