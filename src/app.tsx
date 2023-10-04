import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App () {
  return (
    <main className='flex flex-col min-h-full'>
      <Header />
      <Content />
      <Footer />
    </main>
  )
}

export { App }
