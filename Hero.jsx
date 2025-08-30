const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-3 text-black">laiso</h1>
        <p className="text-lg text-gray-700 mb-6">ソフトウェアエンジニア。モバイルアプリ開発者。LLM愛好家</p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-blue-700">
          <li>
            <a href="https://x.com/laiso" target="_blank" rel="noopener noreferrer" className="underline">X</a>
          </li>
          <li>
            <a href="https://github.com/laiso" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
          </li>
        </ul>

        <div className="mt-10 text-sm text-gray-500">
          最終更新: {new Date().toLocaleDateString('ja-JP')}
        </div>
      </div>
    </section>
  )
}

export default Hero
