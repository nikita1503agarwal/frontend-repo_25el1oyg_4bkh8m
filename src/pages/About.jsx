export default function About() {
  return (
    <div className="min-h-screen p-6 lg:p-10">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/60 dark:border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How it works</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">A deep learning model processes the video frames, detects hand landmarks, and classifies gestures in real time. The interface displays the predicted sign and confidence with smooth visual feedback.</p>
          </div>
          <div className="rounded-3xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/60 dark:border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Supported hand signs</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Hello, Thank You, Yes, No, Please, Help, Stop, Love, and more. The model can be extended with your custom dataset.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/60 dark:border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Try Live Mode</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Open your camera and start recognizing signs instantly.</p>
            <a href="/live" className="inline-flex mt-4 rounded-2xl px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">Start Recognition</a>
          </div>
        </div>
      </div>
    </div>
  )
}
