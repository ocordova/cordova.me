import { useEffect, useRef } from 'react'
import '../styles/tailwind.css'
import 'focus-visible'
import { Inter, Bitter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

const bitter = Bitter({
  subsets: ['latin'],
})

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --bitter-font: ${bitter.style.fontFamily};
          }
        `}
      </style>
      <main className={``}>
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
    </>
  )
}
