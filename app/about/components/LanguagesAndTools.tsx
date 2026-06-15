import Image from "next/image"

export function LanguagesAndTools() {
  return (
    <div className="flex flex-wrap space-x-8 space-y-5">
      <span></span>
      <Image
        alt="PHP"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Laravel"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/laravel/laravel.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="MySQL"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Javascript"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Typescript"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="React"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Vue"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Webpack"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Docker"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Visual Studio Code"
        loading="lazy"
        decoding="async"
        height={40}
        width={40}
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
  );
}
