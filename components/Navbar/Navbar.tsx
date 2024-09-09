import Link from "next/link"

import { buttonVariants } from "../ui/button"
import { ArrowRight } from "lucide-react"
import ThemeToggle from "../ThemeToggle"

import MaxWidthWrapper from "../MaxWidthWrapper"

export const Navbar = () => {
    return (
        <nav className='fixed h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-background/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        href='/'
                        className='flex z-40 font-semibold'>
                        <span>quill.</span>
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link
                                href="/sign-in"
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm"
                                })}
                            >
                                Sign in
                            </Link>

                            <Link
                                href="/sign-in"
                                className={buttonVariants({
                                    size: "sm"
                                })}
                            >
                                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>

                            <ThemeToggle />
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
