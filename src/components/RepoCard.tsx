import CalendarIcon from '@/components/icons/CalendarIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import ScaleIcon from '@/components/icons/ScaleIcon'
import StarIcon from '@/components/icons/StarIcon'

export type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  languages_url: string
  updated_at: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  license: null | { key: string; name: string; spdx_id: string }
  is_template: boolean
  languages: { [key: string]: number }
  topics: string[]
  [key: string]: any
}

export interface RepoCardProps {
  data: Repo
}

const RepoCard = ({ data }: RepoCardProps): JSX.Element => {
  return (
    <div className="repo-card">
      <div className="mb-5">
        <div className="flex flex-wrap items-center space-x-1 space-y-1 -ml-1 -mt-1 mb-2">
          <span></span>

          <a href={data.html_url} className="pr-3" target="__blank">
            <h2 className="text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {data.name}
            </h2>
          </a>

          {data.is_template && (
            <span className="pr-2">
              <Pill>Template</Pill>
            </span>
          )}

          {data.topics.length !== 0 && data.topics.map((topic, i) => <Pill key={i}>{topic}</Pill>)}

          {data.homepage && (
            <a
              href={data.homepage}
              target="__blank"
              className="px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:text-white dark:bg-slate-900 dark:hover:bg-slate-700 rounded-lg text-xs font-semibold transition-colors"
            >
              <div className="flex items-center space-x-1">
                <span>Demo</span>
                <StarIcon width="15" height="15" className="fill-slate-900 dark:fill-white" />
              </div>
            </a>
          )}
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {data.description ?? 'No description, website, or topics provided.'}
        </p>
      </div>

      <div className="mb-3 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5">
        <div className="flex space-x-2">
          <CalendarIcon width="18" height="18" className="fill-slate-400" />
          <RepoDate date={data.updated_at} />
        </div>

        {data.license && (
          <div className="flex space-x-2">
            <ScaleIcon width="18" height="18" className="fill-slate-400" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">{data.license.name}</p>
          </div>
        )}

        <div className="flex space-x-2">
          <LinkIcon width="18" height="18" className="fill-slate-400" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {data.stargazers_count}{' '}
            <span className="sm:hidden">Star{data.stargazers_count >= 2 ? 's' : ''}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center space-x-2 space-y-2 -ml-2">
        <span></span>
        {Object.keys(data.languages).map((lang, i) => (
          <Pill key={i}>{lang}</Pill>
        ))}
      </div>
    </div>
  )
}

export default RepoCard

//

const yearNow = new Date().getFullYear()

function RepoDate({ date }: { date: string }): JSX.Element {
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString('default', { month: 'short' })
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()

  return (
    <p className="text-slate-500 dark:text-slate-400 text-sm">
      Updated on {month} {day}
      {yearNow === year ? '' : `, ${year}`}
    </p>
  )
}

function Pill({ children }: { children: React.ReactNode }): JSX.Element {
  return <span className="pill-default">{children}</span>
}
