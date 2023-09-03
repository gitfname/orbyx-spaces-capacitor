

import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { FileOptions } from "../../../types"
import { Text } from "../.."

const variants = cva(
    `py-2.5 px-4 rounded-xl flex flex-col gap-y-3 border border-black/10`,
    {
        variants: {
            colorSchema: {
                "dark": "bg-brand-4"
            }
        }
    }
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    data: FileOptions
}


function FileCard2({ data, className, colorSchema, ...props }: Props) {
    return (
        <div
            className={twMerge(variants({ className, colorSchema }))}
            {...props}
        >

            <div
                className="flex items-center justify-between gap-x-3"
            >
                <img
                    alt=""
                    src={data.img}
                    className="w-12 h-12 rounded-full object-center object-cover"
                />

                <Text
                    size="caption"
                    className={`font-medium ${colorSchema === "dark" ? "text-brand-3" : "text-brand-4"}`}
                >
                    {data.size}
                </Text>
            </div>

            <div>
                <Text size="subtitle2" className={colorSchema === "dark" ? "text-brand-3" :""}>{data.name}</Text>
                <Text size="caption" className={`mt-1.5 text-brand-1 ${colorSchema === "dark" ? "text-brand-3/50" :""}`}>{data.date}</Text>
            </div>


        </div>
    )
}

export default FileCard2