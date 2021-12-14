import React from 'react'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { GithubStars } from '../components/stats/GithubStars'
import { StackOverflowReputation } from '../components/stats/StackOverflowReputation'

const DashboardPage = () => {
  return (
    <Layout>
      <Seo title="Dashboard" />
      <div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
          Dashboard
        </h1>
        <div className="prose max-w-none mt-2">
          <p>Personal dashboard to track some stats across platforms.</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 items-stretch">
          <GithubStars />
          <StackOverflowReputation />
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
