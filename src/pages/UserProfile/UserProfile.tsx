import { RecentActivites, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"

function UserProfile() {
    return (
        <div className="p-4 bg-brand-3 w-full rounded-3xl">
            <Text size="head1" className="text-brand-4/80">Alice Mani </Text>

            <img
                alt=""
                src={getBaseUrl() + "/img/12.jpg"}
                className="w-40 h-40 rounded-full object-center object-cover shadow-md shadow-black/10 mt-8"
            />

            <div className="mt-10 grid gap-7 grid-cols-3">
                <div className="space-y-1">
                    <Text size="head3" className="font-bold">Username</Text>
                    <Text size="subtitle1">Alice Mani</Text>
                </div>

                <div className="space-y-1">
                    <Text size="head3" className="font-bold">First Name</Text>
                    <Text size="subtitle1">Alice</Text>
                </div>

                <div className="space-y-1">
                    <Text size="head3" className="font-bold">Last Name</Text>
                    <Text size="subtitle1">Mani</Text>
                </div>

                <div className="space-y-1">
                    <Text size="head3" className="font-bold">Age</Text>
                    <Text size="subtitle1">26</Text>
                </div>

                <div className="space-y-1">
                    <Text size="head3" className="font-bold">Role</Text>
                    <Text size="subtitle1">User</Text>
                </div>

                <div className="space-y-1">
                    <Text size="head3" className="font-bold">Experience</Text>
                    <Text size="subtitle1">3 Years</Text>
                </div>
            </div>

            <Text size="head1" className="text-brand-4/80 mt-24">Reecnt Activity</Text>

            <div className="w-full h-96 mt-12">
                <RecentActivites />
            </div>
        </div>

    )
}

export default UserProfile