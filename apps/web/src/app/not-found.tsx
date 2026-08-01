import Link from "next/link";
import { Heading, Paragraph } from "@/components/typography/typography";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-144px)] items-center justify-center px-6 py-16">
      <section className="max-w-xl text-center">
        <Heading>Scene not found.</Heading>
        <Paragraph className="mt-4">
          This path does not exist in the engineering journey yet.
        </Paragraph>
        <Link
          className="mt-8 inline-flex h-11 items-center justify-center rounded-component bg-primary px-5 text-sm font-medium text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href="/"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
