import Image from "next/image";

export const PageFooter = () => {
    return (
        <footer className="relative w-full bg-white">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-stone-300 py-4 md:flex-row md:justify-between">
                    <small className="font-sans antialiased text-sm text-current text-center">
                        &copy; {new Date().getFullYear()} CoreoPlatform. All
                        Rights Reserved.
                    </small>
                    <div className="flex gap-1 sm:justify-center">
                        <a
                            href="https://github.com/CoreoPlatform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/icons/github.svg"
                                alt="GitHub"
                                width={30}
                                height={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
