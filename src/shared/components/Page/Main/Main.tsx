import React, { PropsWithChildren } from "react"

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="flex justify-center md:ml-20 mt-10 mb-10 mr-10 md:mr-20 overflow-auto">
            { children }
        </main>
    )
}
