import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import AppContainer from '@/components/AppContainer'
import RepoCard, { Repo } from '@/components/RepoCard'

export default function Projects({ repos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Projects | Jhon Peter Pacinos</title>
        <meta
          name="description"
          content="Explore my past projects and discover my skills in web development, including PHP, Laravel, Vue, React, and more. See examples of my full-stack applications and efficient code implementations."
        />
      </Head>

      <main>
        <AppContainer>
          <div className="my-10">
            <h1 className="text-2xl font-semibold mb-3">
              <div className="flex space-x-3 title">Projects</div>
            </h1>
            <p className="paragraph ">Explore my past work sourced from GitHub {':)'}</p>
          </div>

          <RepoGroup>
            <p className="text-slate-500 text-sm">Sorted by the latest updates made:</p>
            {repos && repos.map((data) => <RepoCard key={data.id} data={data} />)}
          </RepoGroup>
        </AppContainer>
      </main>
    </>
  )
}

//

function RepoGroup({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="my-10 flex flex-col space-y-5">{children}</div>
}

export const getStaticProps: GetStaticProps<{ repos: Repo[] }> = async (context) => {
  let user = 'jppacinos'
  let page = 1
  let perPage = 50
  let sort = 'updated'

  const res = await fetch(
    `https://api.github.com/users/${user}/repos?page=${page}&per_page=${perPage}&sort=${sort}`,
    {
      headers: {
        accept: 'application/vnd.github+json',
        authorization: `Bearer ${process.env.GITHUB_REPO_ACCESS_TOKEN}`,
      },
    }
  )

  let repos: Repo[] = await res.json()

  if (process.env.NODE_ENV === 'production') {
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

    repos = repos.map((data, idx) => {
      if (reposLang[idx].Shell && Object.keys(reposLang[idx]).length !== 1) {
        delete reposLang[idx].Shell
      }

      return {
        id: data.id,
        name: data.name,
        html_url: data.html_url,
        description: data.description,
        languages_url: data.languages_url,
        updated_at: data.updated_at,
        homepage: data.homepage,
        stargazers_count: data.stargazers_count,
        license: data.license,
        is_template: data.is_template,
        languages: reposLang[idx],
        topics: data.topics,
      } as Repo
    })
  } else {
    // development
    repos.map((data) => (data.languages = { [data.language ?? 'App']: 1 }))
  }

  return {
    props: {
      repos,
    },
  }
}
