import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Hero />
      <section className="relative z-10 -mt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {["Real-time", "Accurate", "Accessible"].map((title, i) => (
              <div key={i} className="rounded-3xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/60 dark:border-white/10 shadow-lg">
                <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-300">Feature</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Experience a futuristic interface with smooth animations and a premium feel.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
