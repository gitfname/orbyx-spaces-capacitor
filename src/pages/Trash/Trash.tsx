
import { Button, FileCard2, SortLienGrid, Text } from "../../components"
import { AiFillAudio, AiFillPlayCircle } from "react-icons/ai"
import { BsFillFileMusicFill } from "react-icons/bs"
import getBaseUrl from "../../utils/base-url"
import CircularSlider from "@fseehawer/react-circular-slider"


const data = [
    {
        id: "doc-1",
        date: "2023/07/11",
        img: <BsFillFileMusicFill className="w-7 h-7 fill-accent-green" />,
        name: "File-01",
        size: "39 MB"
    },
    {
        id: "doc-2",
        date: "2023/07/09",
        img: <AiFillAudio className="w-7 h-7 fill-accent-blue" />,
        name: "File-02",
        size: "41 MB"
    },
    {
        id: "doc-3",
        date: "2023/07/09",
        img: getBaseUrl() + "/img/12.jpg",
        name: "File-03",
        size: "701 MB"
    },
    {
        id: "doc-4",
        date: "2023/07/08",
        img: <AiFillAudio className="w-7 h-7 fill-accent-blue" />,
        name: "File-04",
        size: "101 MB"
    },
    {
        id: "doc-5",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/13.jpg",
        name: "File-5",
        size: "11 MB"
    },
    {
        id: "doc-6",
        date: "2023/07/08",
        img: getBaseUrl() + "/img/14.jpg",
        name: "File-06",
        size: "370 MB"
    },
    {
        id: "doc-7",
        date: "2023/07/02",
        img: <AiFillPlayCircle className="w-7 h-7 fill-accent-red" />,
        name: "File-07",
        size: "23 MB"
    },
    {
        id: "doc-8",
        date: "2023/07/01",
        img: <BsFillFileMusicFill className="w-7 h-7 fill-accent-green" />,
        name: "File-08",
        size: "53 MB"
    },
    {
        id: "doc-9",
        date: "2023/07/01",
        img: <BsFillFileMusicFill className="w-7 h-7 fill-accent-green" />,
        name: "File-09",
        size: "29 MB"
    },
    {
        id: "doc-10",
        date: "2023/06/11",
        img: <AiFillAudio className="w-7 h-7 fill-accent-blue" />,
        name: "File-10",
        size: "9 MB"
    },
    {
        id: "doc-11",
        date: "2023/06/10",
        img: <BsFillFileMusicFill className="w-7 h-7 fill-accent-green" />,
        name: "File-11",
        size: "21 MB"
    },
    {
        id: "doc-12",
        date: "2023/06/02",
        img: <AiFillAudio className="w-7 h-7 fill-accent-blue" />,
        name: "File-12",
        size: "7 MB"
    },
    {
        id: "doc-13",
        date: "2023/06/01",
        img: <BsFillFileMusicFill className="w-7 h-7 fill-accent-green" />,
        name: "File-13",
        size: "41 MB"
    },
    {
        id: "doc-14",
        date: "2023/05/29",
        img: getBaseUrl() + "/img/10.jpg",
        name: "File-14",
        size: "4 MB"
    }
]

function Trash() {
    return (

        <div className="p-4 bg-brand-3 w-full rounded-3xl">
            <div className="flex items-center justify-between">

                <div>
                    <Text size="head1" className="text-brand-4/80">Trash Bin</Text>
                </div>

                <SortLienGrid />

            </div>

            <div className="mt-16 w-full grid grid-cols-4 gap-4">

                <div className="p-5 flex items-center gap-x-4 col-span-2 row-span-2 bg-accent-red rounded-3xl shadow-lg shadow-accent-red/20">
                    <CircularSlider
                        label=" "
                        progressSize={8}
                        trackSize={6}
                        width={140}
                        trackColor="rgba(255,255,255,0.2)"
                        progressColorFrom="rgba(255,255,255,0.9)"
                        progressColorTo="rgba(255,255,255,0.9)"
                        labelColor="rgba(255,255,255,0.8)"
                        appendToValue="%"
                        hideKnob
                        knobDraggable={false}
                        min={0}
                        max={100}
                        dataIndex={(12 / 30) * 100}
                    />

                    <div className="flex flex-col items-center justify-center w-full">
                        <Text size="head3" className="text-white">Trash</Text>
                        <Text size="subtitle1" className="text-brand-3 mt-2">
                            12 GB from 30 GB
                        </Text>
                        <Button className="mt-6 py-3 bg-brand-3 text-accent-red w-max px-12">
                            Clear Trash
                        </Button>
                    </div>

                </div>

                {
                    data.map(image => (
                        <FileCard2
                            className="bg-white border-none"
                            imgWrapper={<div className="w-14 h-14 bg-brand-3 rounded-full grid place-items-center"></div>}
                            data={image}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default Trash