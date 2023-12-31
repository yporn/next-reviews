import Link from "next/link";
import Heading from "@/components/Heading";
import { getFeatureReview } from "@/lib/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Indie Gamer',
};

export default async function HomePage() {
  const review = await getFeatureReview();
  console.log("[HomePage] rendering");
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className=" pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row">
          <img src={review.image} alt="" width="320" height="180" className=" rounded-t rounded-l sm:rounded-r-none" />
          <h2 className=" font-semibold font-orbitron py-1 text-center sm:px-3">{review.title}</h2>
        </Link>
      </div>
    </>
  );
}
