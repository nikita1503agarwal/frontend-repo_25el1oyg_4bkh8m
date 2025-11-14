import { useState } from 'react'
import { UploadCloud } from 'lucide-react'

export default function UploadPage() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const onDrop = async (e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (!f) return
    await handleFile(f)
  }

  const handleFile = async (f) => {
    setFile(f)
    setLoading(true)
    setResult(null)
    // Mock upload + recognition delay
    await new Promise((r) => setTimeout(r, 1500))
    setResult({ label: ['Hello','Yes','No','Please'][Math.floor(Math.random()*4)], confidence: 85 + Math.floor(Math.random()*10) })
    setLoading(false)
  }

  const onInput = async (e) => {
    const f = e.target.files?.[0]
    if (f) await handleFile(f)
  }

  return (
    <div className="min-h-screen p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        <div
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="rounded-3xl p-10 bg-white/70 dark:bg-white/5 backdrop-blur border border-dashed border-white/60 dark:border-white/10 shadow-xl text-center"
        >
          <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
            <UploadCloud />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Upload image or video</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Drag & drop your file here, or click to browse.</p>
          <input type="file" accept="image/*,video/*" onChange={onInput} className="hidden" id="uploader" />
          <label htmlFor="uploader" className="inline-block mt-6 rounded-2xl px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold cursor-pointer">Browse Files</label>

          {loading && (
            <div className="mt-6">
              <div className="w-full h-3 bg-white/60 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 animate-[progress_1.2s_ease_infinite]" style={{ width: '40%' }} />
              </div>
            </div>
          )}

          {result && (
            <div className="mt-6 text-left">
              <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10">
                <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-300">Detected</p>
                <div className="mt-1 flex items-end gap-3">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{result.label}</h3>
                  <span className="text-gray-600 dark:text-gray-300">{result.confidence}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
