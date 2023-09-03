
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

const variants = cva(
  `w-full py-2.5 text-sm font-medium`,
  {
    variants: {
      colorSchema: {
        white: "text-brand-4 bg-white placeholder-brand-1/60",
        dark: "text-white/90 bg-brand-4 placeholder-white/60"
      }
    },
    defaultVariants: {
      colorSchema: "white"
    }
  }
)

interface Props extends HTMLAttributes<HTMLInputElement>, VariantProps<typeof variants> { }

function PasswordField({ className, colorSchema, ...props }: Props) {
  return (
    <input
      className={twMerge(variants({ className, colorSchema }))}
      type="password"
      {...props}
    />
  )
}

export default PasswordField