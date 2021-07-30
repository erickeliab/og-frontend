import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import Testimonial from './testimonial'



const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>
         
          {children}
        </main>
        <section section class="ftco-counter ftco-section ftco-no-pt mt-4 ftco-no-pb img mb-5" id="section-counter">
        <Testimonial />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Layout
