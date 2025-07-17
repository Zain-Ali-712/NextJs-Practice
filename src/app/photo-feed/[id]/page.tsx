import Image from "next/image";
import imagesDetails, { imgDetails } from "../details";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: imgDetails = imagesDetails.find((p) => p.id === id)!;
  return (
    <>
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.title}</h1>
        </div>
        <Image
          alt={photo.title}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />
        <div className="bg-white py-4">
          <h3>{photo.description}</h3>
        </div>
      </div>
    </div>
    </>
  );
}