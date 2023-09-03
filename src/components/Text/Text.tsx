
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const variants = cva(
  `text-slate-800 font-normal`,
  {
    variants: {
      size: {
        head1: "font-bold text-3xl",
        head2: "font-bold text-2xl",
        head3: "font-medium text-xl",
        head4: "font-medium text-lg",
        head5: "font-semibold text-base",
        subtitle1: "font-medium text-base",
        subtitle2: "font-medium text-sm",
        body1: "font-normal text-base",
        body2: "font-normal text-sm",
        button: "font-medium text-sm",
        caption: "font-normal text-xs"
      }
    }
  }
)

interface Props extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof variants> {
  children: ReactNode
}

function Text({ className, size, children, ...props }: Props) {
  return (
    <p
      className={twMerge(variants({ className, size }))}
      {...props}
    >
      {children}
    </p>
  )
}

export default Text