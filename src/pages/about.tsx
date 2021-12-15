import React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
          About
        </h1>
        <div className="prose max-w-none mt-4">
          <p>
            I’m a Full Stack Engineer based in Mexico City, experienced in both
            front-end and back-end development.
          </p>
          <p>
            I have a strong passion for creating simple, engaging and amazing
            user experiences. I love to learn and explore latest technologies.
          </p>
          <h3>I’m pretty awesome at these things</h3>
          <ul>
            <li>Web &amp; Mobile App Design and Development</li>
            <li>Concept Development and Prototyping</li>
            <li>User Interface Design (UI)</li> <li>Experience Design (UX)</li>
            <li>Interaction Design (IxD)</li>
          </ul>
          <h2>My Gear</h2>
          <h3>Coding</h3>
          <ul>
            <li>Editor: VSCode</li>
            <li>
              Theme:{' '}
              <a
                href="https://draculatheme.com/visual-studio-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dracula
              </a>
            </li>
            <li>
              Terminal:{' '}
              <a
                href="https://hyper.is/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hyper
              </a>{' '}
              /{' '}
              <a
                href="https://ohmyz.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oh My Zsh
              </a>
            </li>
          </ul>

          <h3>Software</h3>
          <ul>
            <li>
              <a
                href="https://insomnia.rest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Insomnia
              </a>
            </li>
            <li>
              <a
                href="https://stoplight.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stoplight
              </a>
            </li>
            <li>
              <a
                href="https://dbeaver.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DBeaver
              </a>
            </li>
            <li>
              <a
                href="https://daisydiskapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DaisyDisk
              </a>
            </li>
            <li>
              <a
                href="https://getkap.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kap
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/us/app/magnet/id441258766"
                target="_blank"
                rel="noopener noreferrer"
              >
                Magnet
              </a>
            </li>
            <li>
              <a
                href="https://www.dashlane.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dashlane
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/us/app/coin-tick-menu-bar-crypto/id1141688067"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coin Tick
              </a>
            </li>
          </ul>
          <h2>About the site</h2>
          <p>In case you were wondering, this site is:</p>
          <ul>
            <li>
              Carefully hand-coded with{' '}
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Visual Studio Code
              </a>
            </li>
            <li>
              Built with{' '}
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
            </li>
            <li>
              Styled with{' '}
              <a
                href="http://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>{' '}
              &{' '}
              <a
                href="https://headlessui.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Headless UI
              </a>
            </li>
            <li>
              Iconified with{' '}
              <a
                href="https://heroicons.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heroicons
              </a>
            </li>
            <li>
              Hosted on{' '}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
