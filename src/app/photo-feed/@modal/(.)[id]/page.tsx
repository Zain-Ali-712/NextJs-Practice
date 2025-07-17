import Image from "next/image";
import imagesDetails, { imgDetails } from "@/app/photo-feed/details";
import Modal from "@/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: imgDetails = imagesDetails.find((p) => p.id === id)!;
  
  return (
    <Modal>
      <Image
        alt={photo.title}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.title}</h2>
        <h3>{photo.description}</h3>
      </div>
    </Modal>
  );
}