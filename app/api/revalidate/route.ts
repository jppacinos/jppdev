import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from 'next/cache'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  // Check for secret to confirm this is a valid request
  if (secret === null || secret !== process.env.GITHUB_REPO_ACCESS_TOKEN) {
    return NextResponse.json({ message: 'Unauthenticated' }, { status: 401 })
  }

  try {
    // Revalidate the cache for the `projects` tag
    revalidateTag('projects')
    return NextResponse.json({ message: 'Success' })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
