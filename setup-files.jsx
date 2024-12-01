// pages/_app.tsx
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// pages/index.tsx
import Analytics from '../components/analytics-dashboard'
import JobRecommendations from '../components/job-recommendations'
import UserProfile from '../components/user-profile'

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <Analytics />
      <JobRecommendations />
      <UserProfile />
    </main>
  )
}
