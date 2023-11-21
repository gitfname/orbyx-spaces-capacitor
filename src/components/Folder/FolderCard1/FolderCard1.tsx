
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import getBaseUrl from "../../../utils/base-url"
import { Text } from "../.."

const variants = cva(
    `w-full grid grid-cols-1 select-none grid-rows-1 appearance-none outline-none relative`
)

const imgVariants = cva(
    `w-5 h-5 object-center object-cover`
)

interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {
    size: string;
    lastUpdateTime: string;
    name: string;
    colorSchema?: "dark";
    iconColor: string;
    icon: string;
    imgClassName?: string;
}

function FolderCard1({ className, imgClassName, size, lastUpdateTime, icon, name, colorSchema, iconColor, ...props }: Props) {
    return (
        <button
            {...props}
            className={twMerge(variants({ className }))}
        >


            <div style={{backgroundColor: iconColor}} className="w-12 h-12 rounded-full grid place-items-center absolute translate-y-[30%] translate-x-[30%] shadow-md shadow-black/10 -top-6 left-0">
                <img
                    alt=""
                    src={icon}
                    className={twMerge(imgVariants({className: imgClassName}))}
                />
            </div>

            {
                colorSchema === "dark"
                    ?
                    <img
                        alt=""
                        loading="lazy"
                        src={getBaseUrl() + "/Union-Dark.png"}
                        className="row-start-1 w-full h-full row-end-1 col-start-1 col-end-1"
                    />
                    :
                    <img
                        alt=""
                        loading="lazy"
                        src={getBaseUrl() + "/Union.png"}
                        className="row-start-1 w-full h-full row-end-1 col-start-1 col-end-1"
                    />
            }


            <div
                className="w-full h-full row-start-1 row-end-1 col-start-1 col-end-1 p-3"
            >

                <Text size="subtitle2" className={`text-end pr-2 ${colorSchema === "dark" ? "text-brand-3" : ""}`}>{size}</Text>

                <Text size="subtitle2" className={`text-center mt-7 line-clamp-2 ${colorSchema === "dark" ? "text-brand-3" : ""}`}>{name}</Text>
                <div className={`w-11/12 border-b my-2 mx-auto ${colorSchema === "dark" ? "border-b-white/20" : "border-b-black/20"}`}></div>
                <Text size="caption" className={`text-center font-medium ${colorSchema === "dark" ? "text-brand-3/50" : "text-brand-1"}`}>Last Updated</Text>
                <Text size="subtitle2" className={`text-center mt-3 truncate ${colorSchema === "dark" ? "text-brand-3" : ""}`}>{lastUpdateTime}</Text>

            </div>
        </button>
    )
}

export default FolderCard1