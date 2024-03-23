import type { Metadata } from 'next'
import RepoCard, { Repo } from '@/components/RepoCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Explore Jhon Peter's projects. See examples of his work and technologies used.",
  alternates: {
    canonical: '/projects',
  },
}

export default async function Page() {
  const repos = await getData()

  return (
    <>
      <div className="my-10">
        <h1 className="text-2xl font-semibold mb-3">
          <div className="flex space-x-3">Projects</div>
        </h1>
        <p>Explore my past work sourced from GitHub {':)'}</p>
      </div>

      <div className="my-10 flex flex-col space-y-5">
        <p className="text-slate-500 text-sm">Sorted by the latest updates made:</p>
        {repos && repos.map((data) => <RepoCard key={data.id} data={data} />)}
      </div>
    </>
  )
}

//

async function getData(): Promise<Repo[]> {
  const user = 'jppacinos'
  const page = 1
  const perPage = 50
  const sort = 'updated'
  const url = `https://api.github.com/users/${user}/repos?page=${page}&per_page=${perPage}&sort=${sort}`

  const response = await fetch(url, {
    headers: {
      accept: 'application/vnd.github+json',
      authorization: `Bearer ${process.env.GITHUB_REPO_ACCESS_TOKEN}`,
    },
    next: { tags: ['projects'] },
  })

  const repos: Repo[] = await response.json()

  if (process.env.NODE_ENV !== 'production') {
    return repos.map<Repo>((data) => ({
      ...data,
      languages: { [data.language ?? 'App']: 1 },
    }))
  }

  const reposLang = await Promise.all(
    repos.map((data) =>
      fetch(data.languages_url, {
        headers: {
          accept: 'application/vnd.github+json',
          authorization: `Bearer ${process.env.GITHUB_REPO_ACCESS_TOKEN}`,
        },
      }).then((data) => data.json())
    )
  )

  return repos.map<Repo>((data, idx) => {
    if (reposLang[idx].Shell && Object.keys(reposLang[idx]).length !== 1) {
      delete reposLang[idx].Shell
    }

    return {
      ...data,
      languages: reposLang[idx],
    }
  })
}
