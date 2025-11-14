import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, VideoOff, Play, Square } from 'lucide-react'

function WavePulse({ active }) {
  return (
    <div className="mt-4 h-10 flex items-center gap-1">
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className={`w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-200 ${active ? 'h-8' : 'h-2'}`}
          style={{ transitionDelay: `${i * 10}ms` }}
        />
      ))}
    </div>
  )
}

export default function Live() {
  const videoRef = useRef(null)
  const [streaming, setStreaming] = useState(false)
  const [detected, setDetected] = useState('-')
  const [conf, setConf] = useState(0)

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setStreaming(true)
      }
      // Mock detection pulse demo
      const interval = setInterval(() => {
        setDetected(['Hello', 'Thank You', 'Yes', 'No', 'Please'][Math.floor(Math.random()*5)])
        setConf(60 + Math.floor(Math.random()*40))
      }, 1500)
      videoRef.current._detInterval = interval
    } catch (e) {
      console.error(e)
      alert('Unable to access camera')
    }
  }

  const stop = () => {
    const video = videoRef.current
    if (!video) return
    const stream = video.srcObject
    if (stream) {
      stream.getTracks().forEach((t) => t.stop())
      video.srcObject = null
    }
    if (video._detInterval) clearInterval(video._detInterval)
    setStreaming(false)
    setConf(0)
    setDetected('-')
  }

  useEffect(() => () => stop(), [])

  return (
    <div className="min-h-screen p-6 lg:p-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative rounded-3xl overflow-hidden bg-black/60 border border-white/20 shadow-2xl">
            <video ref={videoRef} className="w-full aspect-video object-cover" playsInline muted></video>

            <div className="absolute bottom-0 inset-x-0 p-4 backdrop-blur bg-black/30 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={start} disabled={streaming} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-green-500/90 hover:bg-green-500 text-white font-semibold disabled:opacity-50">
                  <Play size={18} /> Start
                </button>
                <button onClick={stop} disabled={!streaming} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-red-500/90 hover:bg-red-500 text-white font-semibold disabled:opacity-50">
                  <Square size={18} /> Stop
                </button>
              </div>
              <button onClick={() => alert('Toggle camera coming soon')} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white/20 hover:bg-white/30">
                <Camera size={18} /> Toggle
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/60 dark:border-white/10 shadow-xl">
            <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-300">Detected Sign</p>
            <motion.h2
              key={detected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-2 text-3xl font-bold text-gray-900 dark:text-white"
            >
              {detected}
            </motion.h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Confidence</p>
            <div className="mt-2 h-3 rounded-full bg-white/60 dark:bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${conf}%` }} />
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{conf}%</div>

            <WavePulse active={streaming} />
          </div>
        </div>
      </div>
    </div>
  )
}
