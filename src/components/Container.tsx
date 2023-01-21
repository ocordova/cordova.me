import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Header, Footer } from './'

import { Constants } from 'src/data/constants'

export interface ContainerProps {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
  children: React.ReactNode
}

export const Container = ({
  title,
  description,
  image,
  type,
  date,
  children,
}: ContainerProps) => {
  const router = useRouter()
  const meta = {
    title: title ? `${title} - ${Constants.name}` : Constants.name,
    description: description ? description : Constants.description,
    image: image ? image : Constants.ogImage,
    type: type ? type : 'website',
    date,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${Constants.baseUrl}${router.asPath}`}
        />
        <link rel="canonical" href={`${Constants.baseUrl}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <main className="mt-4 px-6 sm:px-0">{children}</main>
      <Footer />
    </>
  )
}
