import { ReactNode } from "react"
import { orbitron } from "@/app/fonts"

export interface HeadingProps {
    children: ReactNode
}

export default function Heading({ children }: HeadingProps) {
    return (
        <h1 className={`font-bold text-2xl font-orbitron pb-3 ${orbitron.className}`}>{children}</h1>
    )
}