"use client";

import { Suspense, useState } from "react";
import Card from "../components/card";
import Loader from "../components/loader";

async function getBreeds() {
  const res = await fetch("https://dogapi.dog/api/v2/breeds");
  if (!res.ok) throw new Error("Failed to fetch breeds");
  return res.json();
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 

  const ITEMS_PER_PAGE = 6;

  useState(() => {
    getBreeds()
      .then((res) => setData(res))
      .catch(() => setError(true));
  });

  if (error) {
    return <div className="text-red-500 text-center">Error fetching data</div>;
  }

  if (!data) {
    return <Loader />;
  }

  const breeds = data.data.filter((breed: any) =>
    breed.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(breeds.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = breeds.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Dog Breeds</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search breeds..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); 
                    }}
          className="w-full max-w-md px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Suspense fallback={<Loader />}>
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((breed: any) => (
              <Card key={breed.id} breed={breed} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No breeds found</div>
        )}
      </Suspense>

      {/* Pagination Controls */}
      {breeds.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1 ? "bg-gray-300" : "bg-black text-white"
            }`}
          >
            Previous
          </button>

          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages ? "bg-gray-300" : "bg-black text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
