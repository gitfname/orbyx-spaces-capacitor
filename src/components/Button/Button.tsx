
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const variants = cva(
    `w-full py-2.5 px-3.5 font-medium text-sm rounded-3xl flex items-center justify-center gap-x-3 text-center
    shadow-md shadow-black/5 active:scale-95 transition-all duration-200`,
    {
        variants: {
            colorSchema: {
                brand: "bg-brand text-white fill-white",
                disabled: "bg-brand-1 text-white fill-white select-none pointer-events-none",
                disabled2: "bg-brand-1/10 text-black/30 fill-black/30 select-none pointer-events-none",
                ghost: "bg-white text-brand-5 fill-brand-5",
                ghostDark: "bg-brand-5 text-white fill-white"
            }
        },
        defaultVariants: {
            colorSchema: "brand"
        }
    }
)

interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {
    children: ReactNode;
    icon?: string | ReactNode;
}

function Button({ className, colorSchema, icon, children, ...props }: Props) {
    return (
        <button
            className={twMerge(variants({ className, colorSchema }))}
            {...props}
        >
            {
                typeof icon === "string"
                    ?
                    <img
                        alt=""
                        src={icon}
                        loading="lazy"
                        decoding="async"
                        className="w-5 h-5 object-center object-cover"
                    />
                    :
                    icon
                        ?
                        icon
                        :
                        null
            }

            {children}
        </button>
    )
}

export default Button