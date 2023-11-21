

import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { Text } from "../.."

const variants = cva(
    `py-2.5 px-4 rounded-xl select-none flex items-center gap-x-5 border border-black/10`,
    {
        variants: {
            colorSchema: {
                "dark": "bg-brand-4"
            }
        }
    }
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    img: string;
    title: string;
    subtitle: string;
    value: number;
}


function DetailCard2({ img, title, subtitle, value, className, colorSchema, ...props }: Props) {
    return (
        <div
            className={twMerge(variants({ className, colorSchema }))}
            {...props}
        >

            <div
                className="flex items-center gap-x-3"
            >
                <img
                    alt=""
                    src={img}
                    className="w-12 h-12 rounded-full object-center object-cover"
                />

                <div className="flex flex-col gap-y-1">
                    <Text size="subtitle2" className={`text-brand-4 ${colorSchema === "dark" ? "text-brand-3" : ""}`}>
                        {title}
                    </Text>
                    <Text size="caption" className={`${colorSchema === "dark" ? "text-brand-3/50" : "text-brand-1 "} flex items-center`}>
                        {subtitle}
                    </Text>
                </div>
            </div>

            <div className="flex items-center gap-x-2">
                <div className="w-16 h-1.5 rounded-lg overflow-hidden bg-brand/20">
                    <div className="w-1/2 h-full bg-brand rounded-lg"></div>
                </div>
                <Text size="caption" className={`${colorSchema === "dark" ? "text-brand-3/90" : "text-brand-1 "} font-medium`}>20%</Text>
            </div>

        </div>
    )
}

export default DetailCard2