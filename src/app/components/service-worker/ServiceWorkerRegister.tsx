'use client'

import { useEffect } from 'react'

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/tailwindadmin-nextjs/sw.js', {
            scope: '/tailwindadmin-nextjs/',
          })
          .then((reg) => console.log('SW registered:', reg))
          .catch((err) => console.log('SW registration failed:', err))
      })
    }
  }, [])

  return null
}
