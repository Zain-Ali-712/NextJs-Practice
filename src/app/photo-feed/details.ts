import { StaticImageData } from "next/image";
import img1 from "./photos/img1.jpg"
import img2 from "./photos/img2.png"
import img3 from "./photos/img3.png"


export type imgDetails = {
  id: string;
  title: string;
  src: StaticImageData;
  description: string;
};

const imagesDetails: imgDetails[] = [
  {
    id: "1",
    title: "Mountain View",
    src: img1,
    description: "A beautiful view of the mountains during sunset.",
  },
  {
    id: "2",
    title: "Ocean Breeze",
    src: img2,
    description: "Waves crashing against the rocky shore.",
  },
  {
    id: "3",
    title: "Forest Trail",
    src: img3,
    description: "A peaceful trail through the dense forest.",
  },
];

export default imagesDetails;