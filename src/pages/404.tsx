import { Container, Wrapper } from 'src/components/'

export const NotFound = () => {
  return (
    <>
      <Container title="About me">
        <Wrapper>
          <div className="mx-auto min-h-full pt-20 pb-20 text-center sm:pt-40 sm:pb-40">
            <p className="text-2xl leading-8 text-gray-600 dark:text-gray-400">
              404
            </p>
            <h1 className="mt-3 font-serif text-4xl font-normal leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-snug">
              Page not found
            </h1>
            <p className="mt-2 text-base leading-8 text-gray-600 dark:text-gray-400">
              Sorry, we couldn’t find the page you’re looking for
            </p>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default NotFound
