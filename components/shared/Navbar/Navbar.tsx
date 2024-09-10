import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ThemeToggle from "@/app/theme-toggle"
import { currentUser } from "@clerk/nextjs/server"
import { UserButton } from "@clerk/nextjs"

export const Navbar = async () => {
    const user = await currentUser()

    return (
        <nav className='fixed h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-background/75 backdrop-blur-lg transition-all'>
            <div className="max-w-wrapper">
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        href={`${user === null ? "/" : "/dashboard"}`}
                        className='flex z-40 font-semibold'>
                        <span>quill.</span>
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            {user === null ? (
                                <>
                                    <Link
                                        href="/sign-in"
                                        className={buttonVariants({
                                            variant: "ghost",
                                            size: "sm"
                                        })}
                                    >
                                        Sign In
                                    </Link>

                                    <Link
                                        href="/dashboard"
                                        className={buttonVariants({
                                            size: "sm"
                                        })}
                                    >
                                        Launch App <ArrowRight className="ml-1.5 h-5 w-5" />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/pool"
                                        className={buttonVariants({
                                            variant: "ghost",
                                            size: "sm"
                                        })}
                                    >
                                        Criar Pool
                                    </Link>

                                    <Link
                                        href="/dashboard"
                                        className={buttonVariants({
                                            variant: "ghost",
                                            size: "sm"
                                        })}
                                    >
                                        Dashboard
                                    </Link>

                                    <UserButton />
                                </>
                            )}

                            <ThemeToggle />
                        </>
                    </div>
                </div>
            </div>
        </nav>
    )
}
