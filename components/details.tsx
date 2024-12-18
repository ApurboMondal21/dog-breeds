import React from "react";

export default function Card({ breed }: any) {
  const { name, description, life, male_weight, female_weight, hypoallergenic } =
    breed.attributes;

  return (
    <div
    className="flex items-center justify-center"
    >
    <div className="max-w-md border border-gray-200 rounded-lg shadow-sm p-6 bg-white text-gray-800">
      <h2 className="text-2xl font-bold mb-1">{name}</h2>
      <p className="text-sm text-gray-500 mb-4">
        Breed ID: <span className="font-mono">{breed.id}</span>
      </p>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Description</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="flex justify-between items-center border-t pt-3 mt-3">
        <span className="font-semibold">Life Expectancy</span>
        <span className="text-gray-700">{life.min} - {life.max} years</span>
      </div>

      <div className="border-t pt-3 mt-3">
        <h3 className="font-semibold mb-2">Weight Range</h3>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Male</span>
          <span>{male_weight.min} - {male_weight.max} kg</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="font-medium">Female</span>
          <span>{female_weight.min} - {female_weight.max} kg</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t pt-3 mt-3">
        <span className="font-semibold">Hypoallergenic</span>
        <div
          className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
            hypoallergenic
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {hypoallergenic ? "Yes" : "No"}
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        <span className="font-semibold">Type: </span>
        {breed.type}
      </div>
    </div>
    </div>
  );
}
