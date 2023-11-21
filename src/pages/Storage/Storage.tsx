

import { Button, FileCard2, GoBackBtn, SortLienGrid, Text } from "../../components"
import { AiFillAudio } from "react-icons/ai"
import { BsFillFileMusicFill } from "react-icons/bs"
import { useParams } from "react-router-dom"
import getBaseUrl from "../../utils/base-url"
import { ApplicationRoutes } from "../../routes"
import { FileOptions } from "../../types"

interface _FileOptions extends FileOptions {
    isFolder: boolean;
}


const data: Array<_FileOptions> = [
    {
        id: "doc-1",
        date: "2023/07/11",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-01",
        size: "39 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-2",
        date: "2023/07/09",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-02",
        size: "41 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-3",
        date: "2023/07/09",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-03",
        size: "701 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-4",
        date: "2023/07/08",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-04",
        size: "101 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-5",
        date: "2023/07/08",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-5",
        size: "11 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-6",
        date: "2023/07/08",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-06",
        size: "370 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-7",
        date: "2023/07/02",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-07",
        size: "23 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-8",
        date: "2023/07/01",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-08",
        size: "53 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-13",
        date: "2023/06/01",
        img: <BsFillFileMusicFill className="w-7 h-7 fill-accent-green" />,
        name: "File-13",
        size: "41 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-14",
        date: "2023/05/29",
        img: <BsFillFileMusicFill className="w-7 h-7 fill-accent-green" />,
        name: "File-14",
        size: "4 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-9",
        date: "2023/07/01",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-09",
        size: "29 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-10",
        date: "2023/06/11",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-10",
        size: "9 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-11",
        date: "2023/06/10",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "File-11",
        size: "21 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-12",
        date: "2023/06/02",
        img: <AiFillAudio className="w-7 h-7 fill-accent-blue" />,
        name: "File-12",
        size: "7 MB",
        isFolder: false,
        type: "image/jpeg"
    }
]

function Storage() {

    const { provider } = useParams()

    return (

        <div className="p-4 bg-brand-3 w-full rounded-3xl">
            <div className="flex flex-wrap items-center justify-between gap-y-6 gap-x-4">

                <div className="flex items-center gap-5">
                    <GoBackBtn />
                    <Text size="head1" className="text-brand-4/80">{provider}</Text>
                </div>

                <div className="flex items-center gap-x-3">
                    <SortLienGrid />

                    <Button
                        className="px-5 rounded-xl shadow-lg shadow-black/10 py-1.5 w-max ml-4"
                        onClick={() => document.getElementById("development-upload-file")?.click()}
                    >
                        <img loading="lazy" className="w-5 h-5 object-center object-cover" alt="" src={getBaseUrl() + "/icons/Upload-White.png"} />
                    </Button>
                </div>

            </div>

            <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    data.map(item => (
                        <FileCard2
                            link={item.isFolder ? ApplicationRoutes.pages.__folder(item.name) : ""}
                            isClickable
                            className="bg-white border-none"
                            imgWrapper={<div className="w-14 h-14 bg-brand-3 rounded-full grid place-items-center"></div>}
                            data={item}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default Storage