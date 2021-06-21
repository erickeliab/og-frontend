import Meta from '../components/Meta'
import PostList from '../components/posts/PostList'

const laserfiche = ({posts}) => {
  return (
    <>
    <div>
      <Meta title='OG - Laserfiche' />
      <section class="hero-wrap hero-wrap-2" style={{backgroundImage: "url('images/og-bg.jpg')"}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
          <div class="col-md-9 ftco-animatee mb-5 text-center">
          	<p class="breadcrumbs mb-0"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span>Blog <span><i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-0 bread">Laserfiche</h1>
          </div>
        </div>
      </div>
    </section>
     

    
    </div>

    
    <PostList posts={posts} />
   
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default laserfiche
