import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Smart. Simple. Secure Card Payments.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-xl"
          >
            KardX brings a Notion-like calm to your money. Manage cards, pay bills, and move money with glass-smooth ease.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button className="px-5 py-3 rounded-xl font-medium text-white bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors">Sign Up</button>
            <button className="px-5 py-3 rounded-xl font-medium text-zinc-800 dark:text-zinc-200 backdrop-blur-md bg-white/60 dark:bg-zinc-900/40 border border-white/30 dark:border-white/10 hover:bg-white/70 dark:hover:bg-zinc-900/50 transition-colors">Login</button>
            <button className="px-5 py-3 rounded-xl font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors">Explore App →</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 grid sm:grid-cols-3 gap-4"
          >
            {[
              { title: 'Card to Bank Payout', desc: 'Instantly move funds from your card to your bank with clarity and control.' },
              { title: 'Credit Card Bill Pay', desc: 'Pay bills on time with smart reminders and a serene flow.' },
              { title: 'Track Transactions', desc: 'A minimalist ledger that surfaces what matters, without the noise.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-4 backdrop-blur-md bg-white/60 dark:bg-zinc-900/40 border border-white/30 dark:border-white/10 shadow-sm">
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/30 dark:bg-zinc-900/20 border border-white/30 dark:border-white/10 shadow-lg"
        >
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
    </section>
  )
}
