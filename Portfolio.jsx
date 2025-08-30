const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: 'ニュースレター',
      url: 'https://blog.lai.so/',
      note: '専門性の高い技術記事を定期的に配信。読者数は緩やかに増加中。'
    },
    {
      id: 3,
      title: '技術ブログ',
      url: 'https://zenn.dev/laiso',
      note: '実務で得た知見を短く共有。検索流入によって世の中の課題解決に貢献することを重視。'
    }
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-black">Projects</h2>
        <ul className="space-y-6">
          {items.map((p) => (
            <li key={p.id} className="">
              <div className="text-black font-medium">{p.title}</div>
              <div className="text-gray-700 text-sm mb-1">{p.note}</div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline break-all">{p.url}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
