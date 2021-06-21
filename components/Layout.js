import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>
         
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
