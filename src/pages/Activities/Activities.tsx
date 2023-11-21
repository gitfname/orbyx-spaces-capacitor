
import { RecentActivites, Text } from "../../components"

function Activities() {

    return (
        <div className="p-4 bg-brand-3 w-full rounded-3xl">
            <Text size="head1" className="text-brand-4/80">Recent Activites</Text>

            <div className="w-full h-96 mt-12">
                <RecentActivites />
            </div>
        </div>
    )

}

export default Activities