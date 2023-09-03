

import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"


const containerVariants = cva(
    `w-full max-w-xs relative`
)

const searchFieldVariants = cva(
    `w-full text-sm font-medium outline-none px-5 py-3 border rounded-3xl`,
    {
        variants: {
            colorSchema: {
                white: "text-[#333F4E] bg-white fill-[#333F4E] border-black/10",
                dark: "text-brand-3 bg-brand-5 fill-brand-3 border-white/10"
            },
            _size: {
                sm: "py-2.5 px-3",
                lg: "py-3.5 px-4"
            }
        },
        defaultVariants: {
            colorSchema: "white"
        }
    }
)

interface SearchFieldProps extends HTMLAttributes<HTMLInputElement>, VariantProps<typeof searchFieldVariants> {}

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
    searchFieldAttrs?: SearchFieldProps;
    colorSchema?: "white" | "dark",
    size?: "sm" | "lg"
}

function Search({ className, searchFieldAttrs={}, colorSchema, size,  ...props }: Props) {
    return (
        <div
            className={twMerge(containerVariants({ className }))}
            {...props}
        >
            <input
                type="text"
                {...searchFieldAttrs}
                className={twMerge(searchFieldVariants({
                    className: searchFieldAttrs.className,
                    _size: size, colorSchema
                }))}
            />
        </div>
    )
}

export default Search