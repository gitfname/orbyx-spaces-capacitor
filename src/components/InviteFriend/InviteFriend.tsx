

import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { Text } from ".."

const variants = cva(
    `w-full p-3`
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> { }

function InviteFriend({ className, ...props }: Props) {
    return (
        <div
            {...props}
            className={twMerge(variants({ className }))}
        >

            <Text className="text-brand-4/80">Invite a Friend</Text>

        </div >
    )
}

export default InviteFriend