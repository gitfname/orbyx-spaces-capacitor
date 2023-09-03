
import { FileCard2, SortLienGrid, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"


const data = [
    {
        id: "doc-1",
        date: "2023/07/11",
        img: getBaseUrl() + "/img/1.jpg",
        name: "Document-01",
        size: "39 MB"
    },
    {
        id: "doc-2",
        date: "2023/07/09",
        img: getBaseUrl() + "/img/2.jpg",
        name: "Document-02",
        size: "41 MB"
    },
    {
        id: "doc-3",
        date: "2023/07/09",
        img: getBaseUrl() + "/img/3.jpg",
        name: "Document-03",
        size: "701 MB"
    },
    {
        id: "doc-4",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/4.jpg",
        name: "Document-04",
        size: "101 MB"
    },
    {
        id: "doc-5",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/5.jpg",
        name: "Document-5",
        size: "11 MB"
    },
    {
        id: "doc-6",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/6.jpg",
        name: "Document-06",
        size: "370 MB"
    },
    {
        id: "doc-7",
        date: "2023/07/02",
        img: getBaseUrl() + "/img/7.jpg",
        name: "Document-07",
        size: "23 MB"
    },
    {
        id: "doc-8",
        date: "2023/07/01",
        img: getBaseUrl() + "/img/8.jpg",
        name: "Document-08",
        size: "53 MB"
    },
    {
        id: "doc-9",
        date: "2023/07/01",
        img: getBaseUrl() + "/img/9.png",
        name: "Document-09",
        size: "29 MB"
    },
    {
        id: "doc-10",
        date: "2023/06/11",
        img: getBaseUrl() + "/img/10.jpg",
        name: "Document-10",
        size: "9 MB"
    },
    {
        id: "doc-11",
        date: "2023/06/10",
        img: getBaseUrl() + "/img/11.jpg",
        name: "Document-11",
        size: "21 MB"
    },
    {
        id: "doc-12",
        date: "2023/06/02",
        img: getBaseUrl() + "/img/12.jpg",
        name: "Document-12",
        size: "7 MB"
    },
    {
        id: "doc-13",
        date: "2023/06/01",
        img: getBaseUrl() + "/img/13.jpg",
        name: "Document-13",
        size: "41 MB"
    },
    {
        id: "doc-14",
        date: "2023/05/29",
        img: getBaseUrl() + "/img/14.jpg",
        name: "Document-14",
        size: "4 MB"
    }
]

function RecentFiles() {
    return (
        <div className="p-4 bg-brand-3 w-full rounded-3xl">

            <div className="flex items-center justify-between">

                <div>
                    <Text size="head1" className="text-brand-4/80">Recent Files</Text>
                </div>

                <SortLienGrid />

            </div>

            <div className="mt-16 w-full grid grid-cols-4 gap-4">
                {
                    data.map(image => (
                        <FileCard2
                            className="bg-white border-none"
                            data={image}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentFiles