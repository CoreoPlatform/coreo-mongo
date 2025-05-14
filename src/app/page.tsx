export default function WelcomePage() {
    return (
        <div className="text-center">
            <h1 className="font-semibold text-3xl font-[family-name:var(--font-roboto)]">
                Welcome to Coreo-Mongo!
            </h1>
            <p className="text-lg mt-5 font-semibold font-[family-name:var(--font-roboto)]">
                Navigate your databases, inspect collections, and analyze
                documents in a structured and web-based interface.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 md:mt-10">
                <div className="box-content size-64 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition hover:shadow-lg">
                    <h2 className="font-semibold text-2xl font-[family-name:var(--font-roboto)]">
                        ⚒️ Get Started
                    </h2>
                </div>
                <div className="box-content size-64 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition hover:shadow-lg">
                    <h2 className="font-semibold text-2xl font-[family-name:var(--font-roboto)]">
                        📚 Guidelines
                    </h2>
                    <ul className="text-left list-disc font-[family-name:var(--font-roboto)] mt-5">
                        <li className="ml-2">
                            <a
                                href={`https://www.mongodb.com/docs`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:font-semibold"
                            >
                                Coreo-Mongo documentation
                            </a>
                        </li>
                        <li className="ml-2">
                            <a
                                href={`https://www.mongodb.com/docs`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:font-semibold"
                            >
                                MongoDB documentation
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="box-content size-64 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition hover:shadow-lg">
                    <h2 className="font-semibold text-2xl font-[family-name:var(--font-roboto)]">
                        🧑‍💻 Help & Support
                    </h2>
                </div>
            </div>
            <h2 className="mt-10 md:mt-15 font-semibold text-3xl font-[family-name:var(--font-roboto)]">
                What&apos;s new?
            </h2>
            <p className="mt-5 md:mt-7 font-semibold text-xl font-[family-name:var(--font-roboto)]">
                Checkout our{" "}
                <a href="" className="text-green-800">
                    RELEASE
                </a>{" "}
                notes for more information about new versions. For the full
                history of changes see{" "}
                <a href="" className="text-green-800">
                    CHANGELOG
                </a>
                .
            </p>
        </div>
    );
}
