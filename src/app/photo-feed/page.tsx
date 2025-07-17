// app/page.tsx
import Image  from "next/image";
import Link from "next/link";
import details from "./details"

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {details.map(({ id, src, title }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={title}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
