import Heading from "@/components/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <Heading>About Page</Heading>
      <p>A website create to learn Next.js</p>
    </>
  );
}
