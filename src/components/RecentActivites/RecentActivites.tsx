

import {
    ResponsiveContainer, Bar, BarChart, XAxis, Tooltip, TooltipProps
} from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import { Text } from ".."



const data = [
    {
        name: "Saturday",
        value: 190
    },
    {
        name: "Sunday",
        value: 100
    },
    {
        name: "Monday",
        value: 270
    },
    {
        name: "Tuesday",
        value: 30
    },
    {
        name: "Wednesday",
        value: 93
    },
    {
        name: "Thursday",
        value: 130
    },
    {
        name: "Friday",
        value: 200
    }
]

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="w-64 h-52 p-2 bg-brand-3 border border-slate-300 rounded-xl shadow-lg shadow-black/10 space-y-1">
                <div className="flex items-center gap-x-3">
                    <Text size="subtitle2" className="text-brand-1">Day</Text>
                    <Text size="subtitle1">{label}</Text>
                </div>

                <div className="flex items-center gap-x-1">
                    <Text size="subtitle2" className="text-brand-1">View :</Text>
                    <Text size="subtitle2" className="text-brand">{payload[0].value}</Text>
                </div>

                <div className="flex items-center gap-x-1">
                    <Text size="subtitle2" className="text-brand-1">Create :</Text>
                    <Text size="subtitle2" className="text-brand">{payload[0].value}</Text>
                </div>

                <div className="flex items-center gap-x-1">
                    <Text size="subtitle2" className="text-brand-1">Remove :</Text>
                    <Text size="subtitle2" className="text-brand">{payload[0].value}</Text>
                </div>

                <div className="flex items-center gap-x-1">
                    <Text size="subtitle2" className="text-brand-1">Rename and Move :</Text>
                    <Text size="subtitle2" className="text-brand">{payload[0].value}</Text>
                </div>
            </div>
        )
    }
    return null
}

function RecentActivites() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart height={300} data={data} barSize={30} barGap={5} className="mt-12 mx-auto">
                <Bar dataKey="value" fill="#5a75ff" />
                <XAxis dataKey="name" />
                <Tooltip content={<CustomTooltip />} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default RecentActivites