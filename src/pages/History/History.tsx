import { DetailCard1, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"

function History() {
    return (
        <div className="p-4 bg-brand-3 w-full rounded-3xl">
            <Text size="head1" className="text-brand-4/80">History</Text>

            <Text size="head5" className="mt-6 text-brand-4/80">Today</Text>
            <div className="space-y-3 mt-3">
                <DetailCard1
                    img={getBaseUrl() + "/img/1.jpg"}
                    title="You have added CVdesigner.docs"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />
                <DetailCard1
                    img={getBaseUrl() + "/img/2.jpg"}
                    title="You have added WebUi.png"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />

                <DetailCard1
                    img={getBaseUrl() + "/img/3.jpg"}
                    title="You have added lovefiln.cc"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />

            </div>

            <Text size="head5" className="mt-6 text-brand-4/80">Yesterday</Text>
            <div className="space-y-3 mt-3">
                <DetailCard1
                    img={getBaseUrl() + "/img/4.jpg"}
                    title="You have added songlove.mp3"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />
                <DetailCard1
                    img={getBaseUrl() + "/img/5.jpg"}
                    title="You have removed redme.md"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />
            </div>

            <Text size="head5" className="mt-6 text-brand-4/80">4 Days Ago</Text>
            <div className="space-y-3 mt-3">
                <DetailCard1
                    img={getBaseUrl() + "/img/7.jpg"}
                    title="You have added CVdesigner.docs"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />
                <DetailCard1
                    img={getBaseUrl() + "/img/8.jpg"}
                    title="You have added WebUi.png"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />

                <DetailCard1
                    img={getBaseUrl() + "/img/9.png"}
                    title="You have added lovefiln.cc"
                    subtitle="10 min ago"
                    subtitleSlot="end"
                    className="border-none"
                />

            </div>
        </div>
    )
}

export default History