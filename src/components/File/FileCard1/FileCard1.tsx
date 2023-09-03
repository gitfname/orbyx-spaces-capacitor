

import { cva, type VariantProps } from "class-variance-authority"
import React, { AllHTMLAttributes, HTMLAttributes, ReactElement, ReactHTMLElement, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { FileOptions } from "../../../types"
import { Text } from "../.."

const variants = cva(
    `py-2.5 px-4 rounded-xl flex items-center justify-between border border-black/10`,
    {
        variants: {
            colorSchema: {
                "dark": "bg-brand-4"
            }
        }
    }
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    data: FileOptions;
    imgWrapper?: ReactElement;
    imgClassName?: string;
}


function FileCard1({ data, className, colorSchema, imgWrapper, imgClassName, ...props }: Props) {
    return (
        <div
            className={twMerge(variants({ className, colorSchema }))}
            {...props}
        >

            <div
                className="flex items-center gap-x-3"
            >
                {
                    imgWrapper
                        ?
                        React.cloneElement(imgWrapper, {}, <>
                            {
                                typeof data.img === "string"
                                    ?
                                    <img
                                        alt=""
                                        src={data.img}
                                        className={twMerge("w-12 h-12 rounded-full object-center object-cover", imgClassName)}
                                    />
                                    :
                                    data.img
                            }
                        </>)
                        :
                        typeof data.img === "string"
                            ?
                            <img
                                alt=""
                                src={data.img}
                                className={twMerge("w-12 h-12 rounded-full object-center object-cover", imgClassName)}
                            />
                            :
                            data.img
                }

                <div className="flex flex-col gap-y-1">
                    <Text size="subtitle2" className={`text-brand-4 ${colorSchema === "dark" ? "text-brand-3" : ""}`}>
                        {data.name}
                    </Text>
                    <Text size="caption" className={`${colorSchema === "dark" ? "text-brand-3/50" : "text-brand-1 "} flex items-center`}>
                        <Text className="text-brand-1 font-medium text-inherit" size="caption">{data.size}</Text>
                        &nbsp;-&nbsp;
                        {data.date}
                    </Text>
                </div>
            </div>

        </div>
    )
}

export default FileCard1