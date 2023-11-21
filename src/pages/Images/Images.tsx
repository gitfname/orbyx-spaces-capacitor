
import { Button, FileCard2, SortLienGrid, Text } from "../../components"
import { FileOptions } from "../../types"
import getBaseUrl from "../../utils/base-url"


const data: Array<FileOptions> = [
    {
        id: "doc-1",
        date: "2023/07/11",
        img: getBaseUrl() + "/img/1.jpg",
        name: "Document-01",
        size: "39 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-2",
        date: "2023/07/09",
        img: getBaseUrl() + "/img/2.jpg",
        name: "Document-02",
        size: "41 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-3",
        date: "2023/07/09",
        img: getBaseUrl() + "/img/3.jpg",
        name: "Document-03",
        size: "701 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-4",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/4.jpg",
        name: "Document-04",
        size: "101 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-5",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/5.jpg",
        name: "Document-5",
        size: "11 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-6",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/6.jpg",
        name: "Document-06",
        size: "370 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-7",
        date: "2023/07/02",
        img: getBaseUrl() + "/img/7.jpg",
        name: "Document-07",
        size: "23 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-8",
        date: "2023/07/01",
        img: getBaseUrl() + "/img/8.jpg",
        name: "Document-08",
        size: "53 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-9",
        date: "2023/07/01",
        img: getBaseUrl() + "/img/9.png",
        name: "Document-09",
        size: "29 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-10",
        date: "2023/06/11",
        img: getBaseUrl() + "/img/10.jpg",
        name: "Document-10",
        size: "9 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-11",
        date: "2023/06/10",
        img: getBaseUrl() + "/img/11.jpg",
        name: "Document-11",
        size: "21 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-12",
        date: "2023/06/02",
        img: getBaseUrl() + "/img/12.jpg",
        name: "Document-12",
        size: "7 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-13",
        date: "2023/06/01",
        img: getBaseUrl() + "/img/13.jpg",
        name: "Document-13",
        size: "41 MB",
        type: "image/jpeg"
    },
    {
        id: "doc-14",
        date: "2023/05/29",
        img: getBaseUrl() + "/img/14.jpg",
        name: "Document-14",
        size: "4 MB",
        type: "image/jpeg"
    }
]

function Images() {
    return (
        <div className="p-4 bg-brand-3 h-max w-full rounded-3xl">

            <div className="flex flex-wrap items-center justify-between gap-y-6 gap-x-4">

                <div>
                    <Text size="head1" className="text-brand-4/80">Images</Text>
                    <Text size="subtitle2" className="text-brand-4/75 flex items-center mt-2">
                        Total :&nbsp;<Text size="subtitle2" className="text-brand-4/80 font-semibold">9 GB</Text>
                    </Text>
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
                    data.map(image => (
                        <FileCard2
                            isClickable
                            className="bg-white border-none"
                            data={image}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Images