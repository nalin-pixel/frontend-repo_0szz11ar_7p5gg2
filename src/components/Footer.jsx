export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} KardX. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Privacy</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Terms</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Support</a>
        </div>
      </div>
    </footer>
  )
}
