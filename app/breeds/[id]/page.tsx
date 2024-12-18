import Loader from "../../../components/loader";
import Details from "../../../components/details";

async function getBreedDetails(id: string) {
  const res = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
  if (!res.ok) throw new Error("Failed to fetch breed details");
  return res.json();
}

export default async function BreedDetails({
  params,
}: {
  params: { id: string };
}) {
  let breed;

  try {
    breed = await getBreedDetails(params.id);
  } catch {
    return <div className="text-red-500 text-center">Error loading details</div>;
  }

  return (
    <main className="container mx-auto p-6">
      <Details breed={breed.data} />
    </main>
  );
}
