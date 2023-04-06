import Head from 'next/head'
import AppContainer from '@/components/AppContainer'
import AppFooter from '@/components/AppFooter'
import useTheme from '@/hooks/useTheme'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Jhon Peter Pacinos</title>
        <meta
          name="description"
          content="Learn more about me and my work in web development and software engineering, and beyond. Discover my skills, work ethics, interests, and hobbies beyond coding."
        />
      </Head>

      <main>
        <AppContainer>
          <div className="my-10">
            <h1 className="text-2xl font-semibold title mb-3">
              <div className="flex space-x-3">About Me</div>
            </h1>
            <p className="paragraph mb-2">
              I am <span className="font-semibold">Jhon Peter</span>, a software engineer
              specializing in web development. I build full-stack applications and love programming,
              easy-to-understand user interfaces, and simple and efficient code implementations.
            </p>

            <p className="paragraph">
              I have strong problem-solving skills and can efficiently and effectively develop
              high-quality software. I am a quick learner and am eager to expand my knowledge and
              skills in different areas of software development.
            </p>
          </div>

          <div className="mb-5 py-3">
            <h2 className="text-2xl font-semibold mb-3 title">Skills and Abilities</h2>
            <p className="paragraph mb-5">
              I specialize in web development using PHP and commonly work with MySQL and SQLite
              databases. Knowledgeable in using popular frameworks such as Laravel, React, and Vue
              and markup and scripting languages such as HTML, CSS, JavaScript, and TypeScript. For
              source control I use Git and I utilize tools like VSCode and Docker for efficient
              coding and development processes.
            </p>

            <div className="mb-5">
              <p className="paragraph mb-3">Some of my Github Stats:</p>
              <GithubStatsCard />
            </div>

            <div>
              <p className="paragraph mb-3">Languages and Tools:</p>
              <LanguagesAndTools />
            </div>
          </div>

          <div className="mb-5 py-3">
            <h2 className="text-2xl font-semibold mb-3 title">Interests</h2>
            <p className="paragraph">
              I am also passionate about exploring new technologies and discovering how they can be
              applied to real-world problems. It&apos;s always exciting to learn about the latest
              trends and experiment with new tools and frameworks. I also enjoy sharing my knowledge
              and helping others to develop their skills, whether it&apos;s through teaching or
              contributing to open-source projects.
            </p>
          </div>

          <div className="mb-5 py-3">
            <h2 className="text-2xl font-semibold mb-3 title">Professional Values</h2>
            <p className="paragraph">
              I take pride in my work and strive to deliver the best possible results. Good
              attention to detail, clear communication, and a strong work ethic are the keys to
              success in any project. As a software engineer, I am committed to writing clean,
              efficient, and maintainable code and always looking for ways to improve my skills and
              stay up-to-date with the latest industry trends.
            </p>
          </div>

          <div className="mb-5 py-3">
            <h2 className="text-2xl font-semibold mb-3 title">Conclusion</h2>
            <p className="paragraph">
              Thank you for taking the time to learn a little bit about me and my journey in web
              development and software engineering. I am passionate about creating efficient,
              effective, and elegant solutions to challenging problems and I strive to continuously
              learn and improve my skills. If you&apos;re interested or have any questions, please
              don&apos;t hesitate to reach out. I look forward to hearing from you!
            </p>
          </div>
        </AppContainer>
      </main>

      <AppFooter />
    </>
  )
}

//

/* eslint-disable @next/next/no-img-element */

function GithubStatsCard(): JSX.Element {
  const [isTheme] = useTheme()
  const isDark = isTheme === 'dark'

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

function LanguagesAndTools(): JSX.Element {
  return (
    <div className="flex flex-wrap space-x-8 space-y-5">
      <span></span>
      <img
        alt="PHP"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png"
      />
      <img
        alt="Laravel"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/laravel/laravel.png"
      />
      <img
        alt="MySQL"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
      />
      <img
        alt="Javascript"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
      />
      <img
        alt="Typescript"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
      />
      <img
        alt="React"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
      />
      <img
        alt="Vue"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
      />
      <img
        alt="Webpack"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
      />
      <img
        alt="Docker"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
      />
      <img
        alt="Visual Studio Code"
        loading="lazy"
        decoding="async"
        className="h-10"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
      />
    </div>
  )
}
