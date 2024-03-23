import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="py-20">
      <div className="mb-10">
        <div className="relative h-24 w-24 inline-block rounded-full mb-3">
          <Image
            className="rounded-full"
            src="https://s.gravatar.com/avatar/e273fafc75940801f8b8b26b03906164?s=225"
            alt="Jhon Peter Pacinos"
            fill
          />
        </div>
        <h1 className="text-3xl font-semibold mb-5">Jhon Peter Pacinos</h1>
        <p>Welcome to My Digital World! 👋</p>
        <p className="mb-3">Sharing My Journey Through Web Development and Software Engineering.</p>
        <p className="mb-3">
          I am a software engineer specializing in web development. I build full-stack applications
          and love programming, easy-to-understand user interfaces, and simple and efficient code
          implementations.
        </p>
        <p className="my-10">{'>'} Hello World!</p>
      </div>

      <Link href="/about" className="btn-primary btn-primary-active font-semibold">
        Learn More &rarr;
      </Link>
    </div>
  )
}
