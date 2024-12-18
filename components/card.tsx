import Link from "next/link";
import React from "react";

export default function Card({ breed }: any) {
  const {
    name,
    description,
    life,
    male_weight,
    female_weight,
    hypoallergenic,
  } = breed.attributes;

  return (
    <div className="flex flex-col justify-end border border-gray-200 rounded-lg shadow-md p-6 w-full max-w-sm bg-white">
      <div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{name}</h2>

          <div className="mb-4">
            <h3 className="text-gray-600 font-semibold">Description</h3>
            <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
          </div>

          <div className="flex justify-between border-t pt-2 mt-2 text-sm">
            <span className="font-semibold text-gray-600">Life Expectancy</span>
            <span className="text-gray-800">
              {life.min} - {life.max} years
            </span>
          </div>

          <div className="flex justify-between border-t pt-2 mt-2 text-sm">
            <span className="font-semibold text-gray-600">Male Weight</span>
            <span className="text-gray-800">
              {male_weight.min} - {male_weight.max} kg
            </span>
          </div>

          <div className="flex justify-between border-t pt-2 mt-2 text-sm">
            <span className="font-semibold text-gray-600">Female Weight</span>
            <span className="text-gray-800">
              {female_weight.min} - {female_weight.max} kg
            </span>
          </div>

          <div className="flex justify-between border-t pt-2 mt-2 text-sm">
            <span className="font-semibold text-gray-600">Hypoallergenic</span>
            <span
              className={`${
                hypoallergenic ? "text-green-500" : "text-red-500"
              } font-bold`}
            >
              {hypoallergenic ? "Yes" : "No"}
            </span>
          </div>
        </div>

        <div>
          <div className="w-full mt-5 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            <Link className="" href={`/breeds/${breed.id}`}>
              <p className="text-center">View More Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
