
import { useNavigate, useParams } from "react-router-dom"
import { Button, FileCard2, SortLienGrid, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"
import { AiOutlineLeft } from "react-icons/ai"
import { ApplicationRoutes } from "../../routes"
import { FileOptions } from "../../types"

interface _FileOptions extends FileOptions {
    isFolder: boolean;
}

const data: Array<_FileOptions> = [
    {
        id: "doc-1",
        date: "2023/07/11",
        img: getBaseUrl() + "/img/1.jpg",
        name: "Document-01",
        size: "39 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-2",
        date: "2023/07/09",
        img: <img alt="" loading="lazy" decoding="async" src={getBaseUrl() + "/icons/folder-48.png"} className="w-8 h-8" />,
        name: "Document-02",
        size: "41 MB",
        isFolder: true,
        type: "image/jpeg"
    },
    {
        id: "doc-3",
        date: "2023/07/09",
        img: getBaseUrl() + "/img/3.jpg",
        name: "Document-03",
        size: "701 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-4",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/4.jpg",
        name: "Document-04",
        size: "101 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-5",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/5.jpg",
        name: "Document-5",
        size: "11 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-6",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/6.jpg",
        name: "Document-06",
        size: "370 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-7",
        date: "2023/07/02",
        img: getBaseUrl() + "/img/7.jpg",
        name: "Document-07",
        size: "23 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-8",
        date: "2023/07/01",
        img: getBaseUrl() + "/img/8.jpg",
        name: "Document-08",
        size: "53 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-9",
        date: "2023/07/01",
        img: getBaseUrl() + "/img/9.png",
        name: "Document-09",
        size: "29 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-10",
        date: "2023/06/11",
        img: getBaseUrl() + "/img/10.jpg",
        name: "Document-10",
        size: "9 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-11",
        date: "2023/06/10",
        img: getBaseUrl() + "/img/11.jpg",
        name: "Document-11",
        size: "21 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-12",
        date: "2023/06/02",
        img: getBaseUrl() + "/img/12.jpg",
        name: "Document-12",
        size: "7 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-13",
        date: "2023/06/01",
        img: getBaseUrl() + "/img/13.jpg",
        name: "Document-13",
        size: "41 MB",
        isFolder: false,
        type: "image/jpeg"
    },
    {
        id: "doc-14",
        date: "2023/05/29",
        img: getBaseUrl() + "/img/14.jpg",
        name: "Document-14",
        size: "4 MB",
        isFolder: false,
        type: "image/jpeg"
    }
]

function Folder() {

    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className="p-4 bg-brand-3 h-max w-full rounded-3xl">

            <div className="flex flex-wrap items-center justify-between gap-y-6 gap-x-4">

                <div className="flex items-center gap-x-5">
                    <Button onClick={() => navigate(-1)} className="rounded-lg w-max py-2 flex-shrink-0">
                        <AiOutlineLeft className="w-5 h-5 fill-brand-3" />
                    </Button>
                    <Text size="head1" className="text-brand-4/80 flex-shrink-0">{id}</Text>
                </div>


                <div className="flex items-center gap-x-3">
                    <SortLienGrid />

                    <Button
                        className="px-5 rounded-xl shadow-lg shadow-black/10 py-1.5 w-max max-md:hidden ml-4"
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

export default Folder