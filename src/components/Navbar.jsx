import { useEffect, useState } from 'react'
import { Moon, Sun, LogIn, UserPlus, Compass } from 'lucide-react'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Initialize from system preference on first load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/50 dark:bg-zinc-900/40 border-b border-white/30 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 shadow-lg shadow-indigo-500/20"></div>
          <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">KardX</span>
        </div>
        <nav className="hidden sm:flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-900/5 dark:hover:bg-white/5 transition-colors">
            <LogIn size={18} /> Login
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors">
            <UserPlus size={18} /> Sign Up
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-900/5 dark:hover:bg-white/5 transition-colors">
            <Compass size={18} /> Explore App
          </button>
          <div className="w-px h-6 bg-zinc-900/10 dark:bg-white/10 mx-2" />
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-zinc-700 hover:bg-zinc-900/5 dark:text-zinc-200 dark:hover:bg-white/5 transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
