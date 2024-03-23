import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    "Oops! The page you're looking for couldn't be found. Please check the URL or try searching for the content you're looking for.",
}

export default function NotFound() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-4xl font-semibold mb-3">
          <div className="flex space-x-3">Oops!</div>
        </h1>
        <p>404 Page Not Found {':('}</p>
      </div>

      <Link
        href="/"
        className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
      >
        Return Home &rarr;
      </Link>
    </>
  )
}
