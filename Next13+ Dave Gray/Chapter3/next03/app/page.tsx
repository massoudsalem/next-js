import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Home Page
      </h1>
      <Link href="/users">
        users page
      </Link>
    </main>
  )
}
