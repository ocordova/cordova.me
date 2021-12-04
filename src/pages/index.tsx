import * as React from 'react'
import { Layout } from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
          Óscar Córdova
        </h1>
        <p className="text-gray-600 mt-2">
          Full Stack Engineer based in Mexico City
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
