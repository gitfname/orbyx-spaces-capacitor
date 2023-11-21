
import { ReactNode, useRef, useState } from "react"
import { useUploadQueueStore } from "../../stores"
import { Text } from "..";
import { useDrop } from "ahooks"

interface Props {
    children: ReactNode;
}

function Droppable({ children }: Props) {
    const addFilesToQueue = useUploadQueueStore(selector => selector.addNewFile)
    const [isDragOver, setIsDragOver] = useState(false)
    const tref = useRef<HTMLDivElement>(null)
    useDrop(tref, {
        onFiles(files, event) {
            setIsDragOver(false)
            if (event && files) {
                Array.from(files).forEach(file => {
                    addFilesToQueue({
                        id: file.name + file.size,
                        date: file.lastModified.toString(),
                        img: "",
                        name: file.name,
                        size: file.size.toString(),
                        type: "image/jpeg",
                        progress: 0,
                        file
                    })
                })
            }
        },
        onDrop() {
            setIsDragOver(false)
        },
        onDragEnter(e) {
            console.log(e)
            setIsDragOver(true)
        },
        onDragLeave() {
            setIsDragOver(false)
        },
    })

    return (
        <div
            ref={tref}
        >

            <div
                className={`rounded-xl w-[97vw] h-[97vh] fixed top-[1.5vh] left-[1.5vw] bg-black/50
                backdrop-blur-sm grid place-items-center ${isDragOver ? "z-50" : "-z-50 opacity-0"}`}
            >
                <Text className="text-gray-200 text-3xl lg:text-5xl font-medium">Drag & Drop Your Files Here</Text>
            </div>

            {children}
        </div>
    )
}

export default Droppable