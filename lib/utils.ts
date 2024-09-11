import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseStringfy = (value: any) => JSON.parse(JSON.stringify(value))

export const handleError = (error: unknown) => {
    if (error instanceof Error) {
        console.error(error.message)
        throw new Error(`Error: ${error.message}`)
    } else if (typeof error === "string") {
        console.error(error)
        throw new Error(`Error: ${error}`)
    } else {
        console.error(error)
        throw new Error(`Unknown error: ${JSON.stringify(error)}`)
    }
}