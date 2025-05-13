"use client";

import Link from "next/link"
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";

type CollectionMetrcis = {
    name: string;
    indexCount: number;
    docsCount: number;
}

export const SideBar = () => {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState<CollectionMetrcis[]>([]);
    const [dropDownCollections, setDropDownCollections] = useState(true);
    const [databaseName, setDatabaseName] = useState('');

    useEffect(() => {
        fetch("/api/database-name")
            .then((res) => res.json())
            .then((data) => {
            setDatabaseName(data.databaseName || "unknown");
        });
        fetch("/api/collections")
            .then((res) => res.json())
            .then((data) => {
                setCollections(data.collections || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading collections:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div><Loader /></div>;
        
    return (
        <aside className="w-64 md:max-h-[calc(100vh-40px)] sticky top-0 bg-gradient-to-b from-green-900 to-green-800 dark:bg-gray-200 border-r p-4 overflow-y-auto">
            <Link href={"/"}>
                <button className="flex justify-start items-start w-full focus:outline-none focus:text-indigo-400 text-gray-200 text-left py-5">
                    <p className="text-lg leading-5 font-roboto font-medium uppercase">Home</p>
                </button>
            </Link>
            <button onClick={() => setDropDownCollections(!dropDownCollections)} className="focus:outline-none focus:text-indigo-400 text-left  text-gray-200 flex justify-between items-center w-full py-5 space-x-14">
                <p className="text-lg leading-5 font-roboto font-medium uppercase">{ databaseName }</p>
                <svg 
                    id="icon1" 
                    className={`transform transition-transform duration-300 ${
                        dropDownCollections ? "rotate-180" : ""
                    }`} 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {!dropDownCollections && (
                <div className="flex justify-start flex-col items-start pb-5">
                    {collections.length === 0 ? (
                        <p className="text-base text-gray-100 leading-4">No one collection</p>
                    ) : (
                        collections.map((c) => (
                            <Link key={c.name} href={`/collections/${c.name}`}>
                                <button 
                                    title={`Documents: ${c.docsCount}, Indexes: ${c.indexCount}`}
                                    className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
                                    <p className="text-base leading-4 text-white">{c.name}</p>
                                </button>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </aside>
    )
}
