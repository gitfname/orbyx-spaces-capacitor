

import { cva, type VariantProps } from "class-variance-authority"
import React, { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const variants = cva(
    `w-full max-w-xs rounded-3xl border p-4`,
    {
        variants: {
            colorSchema: {
                white: "text-brand-4 bg-white border-black/10",
                dark: "text-white bg-brand-4 border-white/10"
            }
        },
        defaultVariants: {
            colorSchema: "white"
        }
    }
)

const labelVariants = cva(
    `w-full text-sm font-medium px-2 mb-1 block bg-inherit`,
    {
        variants: {
            colorSchema: {
                white: "text-brand-4/70",
                dark: "text-white/70",
            }
        },
        defaultVariants: {
            colorSchema: "white"
        }
    }
)

interface LabelProps extends HTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> { }

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    children: ReactNode;
    labelText: string;
    labelAttribute?: LabelProps;
}

function InputField({ className, children, labelAttribute={}, labelText, colorSchema="white", ...props }: Props) {
    return (
        <div
            className={twMerge(variants({ className, colorSchema }))}
            {...props}
        >
            <label
                {...labelAttribute}
                className={twMerge(labelVariants({ className: labelAttribute.className, colorSchema: colorSchema }))}
            >
                {labelText}
            </label>

            {
                React.Children.map(children, child => {
                    if(React.isValidElement(child)) {
                        return React.cloneElement(child, { colorSchema, ...child.props })
                    }
                    return child
                })
            }
        </div>
    )
}

export default InputField