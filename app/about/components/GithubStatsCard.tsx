'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

/* eslint-disable @next/next/no-img-element */
export function GithubStatsCard() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  const statsDefault = `https://github-readme-stats.vercel.app/api?username=jppacinos&locale=en&hide_title=true&hide_border=true&show_icons=true${
    isDark ? '&theme=dark#gh-dark-mode-only' : ''
  }`

  const statsTopLang = `https://github-readme-stats.vercel.app/api/top-langs/?username=jppacinos&layout=compact&hide_border=true&langs_count=6&hide=blade${
    isDark ? '&theme=dark#gh-dark-mode-only' : ''
  }`

  return (
    <div className="flex flex-col content-center justify-around md:flex-row">
      <img src={statsDefault} loading="lazy" decoding="async" alt="Jhon Peters's github stats" />
      <img
        src={statsTopLang}
        loading="lazy"
        decoding="async"
        alt="Jhon Peter's top programming languages"
      />
    </div>
  )
}
