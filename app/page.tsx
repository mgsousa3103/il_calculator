import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="max-w-wrapper h-screen flex flex-col items-center justify-center text-center">
                <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                    Lorem ipsum, <span className="text-violet-600">consectetur</span> adipisicing.
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
                >
                    Launch App <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </>
    );
}
