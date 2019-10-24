import Head from 'next/head'

import NavBar from './navbar'
import Footer from './footer'

import '../styles/styles.sass'

export default ({ children, title = 'Home' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <NavBar />
    </header>
    {children}
    <Footer />
  </div>
)
