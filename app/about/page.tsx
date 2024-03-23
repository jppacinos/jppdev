import type { Metadata } from 'next'
import { GithubStatsCard } from './components/GithubStatsCard'
import { LanguagesAndTools } from './components/LanguagesAndTools'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn more about Jhon Peter's work in web development and software engineering, and beyond. Discover skills, work ethics, interests, and hobbies beyond coding.",
  alternates: {
    canonical: '/about',
  },
}

export default function Page() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-2xl font-semibold mb-3">
          <div className="flex space-x-3">About Me</div>
        </h1>
        <p className="mb-2">
          I am <span className="font-semibold">Jhon Peter</span>, a software engineer specializing
          in web development. I build full-stack applications and love programming,
          easy-to-understand user interfaces, and simple and efficient code implementations.
        </p>

        <p>
          I have strong problem-solving skills and can efficiently and effectively develop
          high-quality software. I am a quick learner and am eager to expand my knowledge and skills
          in different areas of software development.
        </p>
      </div>

      <div className="mb-5 py-3">
        <h2 className="text-2xl font-semibold mb-3">Skills and Abilities</h2>
        <p className="mb-5">
          I specialize in web development using PHP and commonly work with MySQL and SQLite
          databases. Knowledgeable in using popular frameworks such as Laravel, React, and Vue and
          markup and scripting languages such as HTML, CSS, JavaScript, and TypeScript. For source
          control I use Git and I utilize tools like VSCode and Docker for efficient coding and
          development processes.
        </p>

        <div className="mb-5">
          <p className="mb-3">Some of my Github Stats:</p>
          <GithubStatsCard />
        </div>

        <div>
          <p className="mb-3">Languages and Tools:</p>
          <LanguagesAndTools />
        </div>
      </div>

      <div className="mb-5 py-3">
        <h2 className="text-2xl font-semibold mb-3">Interests</h2>
        <p>
          I am also passionate about exploring new technologies and discovering how they can be
          applied to real-world problems. It&apos;s always exciting to learn about the latest trends
          and experiment with new tools and frameworks. I also enjoy sharing my knowledge and
          helping others to develop their skills, whether it&apos;s through teaching or contributing
          to open-source projects.
        </p>
      </div>

      <div className="mb-5 py-3">
        <h2 className="text-2xl font-semibold mb-3">Professional Values</h2>
        <p>
          I take pride in my work and strive to deliver the best possible results. Good attention to
          detail, clear communication, and a strong work ethic are the keys to success in any
          project. As a software engineer, I am committed to writing clean, efficient, and
          maintainable code and always looking for ways to improve my skills and stay up-to-date
          with the latest industry trends.
        </p>
      </div>

      <div className="mb-5 py-3">
        <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
        <p>
          Thank you for taking the time to learn a little bit about me and my journey in web
          development and software engineering. I am passionate about creating efficient, effective,
          and elegant solutions to challenging problems and I strive to continuously learn and
          improve my skills. If you&apos;re interested or have any questions, please don&apos;t
          hesitate to reach out. I look forward to hearing from you!
        </p>
      </div>
    </>
  )
}
