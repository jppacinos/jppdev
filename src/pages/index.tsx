import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AppContainer from '@/components/AppContainer'
import AppFooter from '@/components/AppFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jhon Peter Pacinos</title>
        <meta
          name="description"
          content="Welcome to my personal website. Explore my portfolio and learn about my skills in web development and software engineering, and more."
        />
      </Head>

      <main>
        <AppContainer>
          <div className="py-20">
            <div className="mb-10">
              <div className="relative h-24 w-24 inline-block rounded-full mb-3">
                <Image
                  className="rounded-full"
                  src="https://s.gravatar.com/avatar/e273fafc75940801f8b8b26b03906164?s=80"
                  alt="Picture of the developer"
                  fill
                  unoptimized
                />
              </div>
              <h1 className="text-3xl font-semibold mb-5 dark:text-slate-300">
                Jhon Peter Pacinos
              </h1>
              <p>Welcome to My Digital World! 👋</p>
              <p className="mb-3">
                Sharing My Journey Through Web Development and Software Engineering.
              </p>
              <p className="mb-3">
                I am a software engineer specializing in web development. I build full-stack
                applications and love programming, easy-to-understand user interfaces, and simple
                and efficient code implementations.
              </p>
              <p className="my-10">{'>'} Hello World!</p>
            </div>

            <Link
              href="/about"
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
            >
              Learn More &rarr;
            </Link>
          </div>
        </AppContainer>
      </main>

      <AppFooter />
    </>
  )
}
