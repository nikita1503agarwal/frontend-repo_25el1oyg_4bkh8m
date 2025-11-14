import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Upload, Camera, Info, Menu, Sun, Moon } from 'lucide-react'

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="hidden lg:inline">{dark ? 'Light' : 'Dark'} mode</span>
    </button>
  )
}

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const location = useLocation()

  const nav = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/live', label: 'Live', icon: Camera },
    { to: '/upload', label: 'Upload', icon: Upload },
    { to: '/about', label: 'About', icon: Info },
  ]

  return (
    <aside className={`fixed left-0 top-0 h-full z-20 transition-[width] duration-300 ${open ? 'w-64' : 'w-20'}`}>
      <div className="h-full backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border-r border-white/40 dark:border-white/10 shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md" />
            {open && (
              <span className="text-md font-semibold text-gray-800 dark:text-gray-100">Sign AI</span>
            )}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl bg-white/60 hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={18} />
          </button>
        </div>

        <nav className="flex-1 px-2 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon
            const active = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all ${
                  active
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-700 dark:text-blue-200'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10'
                }`}
              >
                <div className={`rounded-xl p-2 ${active ? 'bg-white/70 dark:bg-white/10' : 'bg-white/60 dark:bg-white/5'}`}>
                  <Icon size={18} />
                </div>
                {open && <span className="font-medium">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-3">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  )
}
