
import { Button, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"

function InviteFriend() {
    return (
        <div className="p-4 bg-brand-3 w-full rounded-3xl min-h-full">
            <Text size="head1" className="text-brand-4/80 mt-2 text-center">Invite a Friend</Text>
            <Text size="subtitle2" className="text-brand-4/75 mt-2 text-center">
                Copy your code, share it with your friends.
            </Text>

            <img
                alt=""
                loading="lazy"
                src={getBaseUrl() + "/img/Illustration-1.png"}
                className="w-64 h-auto object-center object-cover block mx-auto mt-6"
            />

            <div className="my-5 w-6/12 flex items-center justify-between mx-auto border border-dotted border-brand p-3 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.075)]">
                <Text size="subtitle2" className="text-brand-1">wurc27rc37thin1y9r7ct1</Text>
                <Button className="w-max text-xs py-2">
                    Copy
                </Button>
            </div>

            <div className="flex items-center gap-3 justify-center">
                <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.0.9)]">
                    <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Instagram.png"} className="w-5 h-5" />
                </Button>

                <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.09)]">
                    <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Twitter.png"} className="w-5 h-5" />
                </Button>

                <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.09)]">
                    <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Facebook.png"} className="w-5 h-5" />
                </Button>

                <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.09)]">
                    <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Messenger.png"} className="w-6 h-6" />
                </Button>
            </div>
        </div>
    )
}

export default InviteFriend