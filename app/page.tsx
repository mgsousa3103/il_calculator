import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <MaxWidthWrapper className="h-screen flex flex-col items-center justify-center text-center">
                <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-background px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/25">
                    <p className="text-sm font-semibold text-foreground">
                        Quill is now public!
                    </p>
                </div>
                <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                    Chat with your <span className="text-violet-600">documents</span> in seconds
                </h1>
                <p className="mt-5 max-w-prose text-foreground sm:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eligendi perspiciatis ea expedita illum earum et nisi! Laudantium, sit nulla?
                </p>

                <Link
                    className={buttonVariants({
                        size: "lg",
                        className: "mt-5"
                    })}
                    href="/dashboard"
                    target="_blank"
                >
                    Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </MaxWidthWrapper>
        </>
    );
}
