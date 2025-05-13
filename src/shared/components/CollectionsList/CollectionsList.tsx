"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "../Page/Loader/Loader";

type CollectionMetrcis = {
    name: string;
    indexCount: number;
    docsCount: number;
}

export const CollectionsList = () => {
  const [collections, setCollections] = useState<CollectionMetrcis[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  if (collections.length === 0) return <div>No one collection</div>;

  return (
      <div className="flex flex-col items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 text-3xl font-semibold">Collections</h2>
        </div>
        <div>
			  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					  <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-green-600 border-r border-gray-300 text-center text-base font-semibold text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-green-600 border-r border-gray-300 text-center text-base font-semibold text-white uppercase tracking-wider">
                    Indexes
                  </th>
                  <th className="px-5 py-3 bg-green-600 border-r border-gray-300 text-center text-base font-semibold text-white uppercase tracking-wider">
                    Documents
                  </th>
                </tr>
              </thead>
              <tbody>
                {collections.map((cm: CollectionMetrcis) => (
                  <tr key={cm.name}>
                    <td className="md:px-30 px-15 py-10 border-b border-r border-gray-200 bg-white text-center text-xl">
                      <Link href={`/${cm.name}`}>
                        {cm.name}
                      </Link>
                    </td>
                    <td className="md:px-30 px-15 py-10 border-b border-r border-gray-200 bg-white text-center text-xl">
                      {cm.indexCount}
                    </td>
                    <td className="md:px-30 px-15 py-10 border-b border-r border-gray-200 bg-white text-center text-xl">
                      {cm.docsCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}