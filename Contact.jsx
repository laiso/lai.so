const Contact = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">連絡先</h2>
        <p className="text-gray-700 mb-4">お仕事のご相談はメールにてご連絡ください。</p>
        <p className="text-gray-700">
          メール: <a href="mailto:laiso+work@lai.so" className="text-blue-700 underline">laiso+work@lai.so</a>
        </p>
        <div className="mt-8 text-sm text-gray-500">通常24時間以内に返信します。</div>
      </div>
    </section>
  )
}

export default Contact
