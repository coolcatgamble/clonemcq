import Link from "next/link";
import { Card, CardBody, Button } from "@/components/ui";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="mx-auto text-center">
        <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
          Qwiz App
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Engage your classroom with AI-powered live quizzes.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card className="transition hover:shadow-md">
            <CardBody>
              <h2 className="text-xl font-semibold">Lecturer</h2>
              <p className="mt-2 text-sm text-gray-600">
                Start a live session and publish questions.
              </p>
              <div className="mt-4">
                <Button asChild>
                  <Link href="/lecturer">I’m a lecturer</Link>
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card className="transition hover:shadow-md">
            <CardBody>
              <h2 className="text-xl font-semibold">Student</h2>
              <p className="mt-2 text-sm text-gray-600">
                Join with a code and answer MCQs.
              </p>
              <div className="mt-4">
                <Button variant="secondary" asChild>
                  <Link href="/student">I’m a student</Link>
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
