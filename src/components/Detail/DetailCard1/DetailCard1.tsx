

import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { Text } from "../..";

const variants = cva(
    `w-full p-2 rounded-xl border border-black/10 flex items-center justify-between gap-x-3`,
    {
        variants: {
            colorSchema: {
                dark: "border-white/10 bg-brand-4"
            }
        }
    }
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    img: string;
    title: string;
    subtitle: string;
    subtitleSlot?: "start" | "end"
}

function DetailCard1({ img, title, subtitle, className, colorSchema, subtitleSlot = "start", ...props }: Props) {
    return (
        <div
            {...props}
            className={twMerge(variants({ className, colorSchema }))}
        >

            <div className="flex items-center gap-x-3">
                <img
                    alt=""
                    src={img}
                    className="w-12 h-12 rounded-full object-center object-cover"
                />
                <div>
                    <Text size="subtitle2" className={colorSchema === "dark" ? "text-brand-3" : "text-brand-4"}>{title}</Text>
                    {
                        subtitleSlot === "start"
                            ?
                            <Text size="caption" className={`mt-0.5 ${colorSchema === "dark" ? "text-brand-3/50" : "text-brand-4"}`}>{subtitle}</Text>
                            :
                            null
                    }
                </div>
            </div>

            {
                subtitleSlot === "end"
                    ?
                    <Text size="caption" className={colorSchema === "dark" ? "text-brand-3/50" : "text-brand-4"}>{subtitle}</Text>
                    :
                    null
            }
        </div>
    )
}

export default DetailCard1