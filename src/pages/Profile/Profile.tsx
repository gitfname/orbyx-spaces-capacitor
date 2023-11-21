
import { Button, InputField, RecentActivites, Text, TextField } from "../../components"
import getBaseUrl from "../../utils/base-url"

function Profile() {
    return (
        <div className="p-4 bg-brand-3 w-full rounded-3xl">
            <Text size="head1" className="text-brand-4/80">Account Settings</Text>

            <img
                alt=""
                src={getBaseUrl() + "/img/13.jpg"}
                className="w-40 h-40 rounded-full object-center object-cover shadow-md shadow-black/10 mt-8"
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <InputField labelText="Full Name" className="max-w-none rounded-xl pb-2">
                    <TextField placeholder="Enter you full name" className="outline-none" />
                </InputField>

                <InputField labelText="Email" className="max-w-none rounded-xl pb-2">
                    <TextField placeholder="Enter you Email" className="outline-none" />
                </InputField>

                <InputField labelText="Phone number" className="max-w-none rounded-xl pb-2">
                    <TextField placeholder="Enter you phone number" className="outline-none" />
                </InputField>
            </div>

            <div className="mt-16 flex items-center gap-3">
                <Button className="w-max px-8">
                    Update
                </Button>

                <Button colorSchema="ghost" className="w-max px-8">
                    Cancel
                </Button>
            </div>
            <div className="w-full h-96 mt-20">
                <RecentActivites />
            </div>
        </div>
    )
}

export default Profile