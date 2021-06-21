import Meta from '../components/Meta'
import PostList from '../components/posts/PostList'

const videos = ({posts}) => {
  return (
    <>
    <div>
      <Meta title='OG - Videos' />
      <section class="hero-wrap hero-wrap-2" style={{backgroundImage: "url('images/og-bg.jpg')"}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
          <div class="col-md-9 ftco-animate mb-5 text-center">
          	<p class="breadcrumbs mb-0"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span>Blog <span><i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-0 bread">Play</h1>
          </div>
        </div>
      </div>
    </section>
     

    
    </div>

    
    <section class="ftco-section">
		<div class="container">
    	
		<div class="container">
		  <div class="row d-flex">
			<div class="col-md-4 d-flex ftco-animatee">
				<div class="blog-entry justify-content-end">
				<div class="text text-center">
					<a href="blog-single.html" class="block-20 img d-flex align-items-center" style={{backgroundImage: "url('images/image_1.jpg')"}}>
						<div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						  <div>
							  <span class="day">02</span>
							  <span class="mos">June</span>
							  <span class="yr">2020</span>
						  </div>
					  </div>
					</a>
				 	</div>
			  </div>
			</div>
			<div class="col-md-4 d-flex ftco-animatee">
				<div class="blog-entry justify-content-end">
				<div class="text text-center">
					<a href="blog-single.html" class="block-20 img d-flex align-items-center" style={{backgroundImage: "url('images/image_2.jpg')"}}>
						<div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						  <div>
							  <span class="day">02</span>
							  <span class="mos">June</span>
							  <span class="yr">2020</span>
						  </div>
					  </div>
					</a>
				 </div>
			  </div>
			</div>

      <div class="col-md-4 d-flex ftco-animatee">
				<div class="blog-entry justify-content-end">
				<div class="text text-center">
					<a href="blog-single.html" class="block-20 img d-flex align-items-center" style={{backgroundImage: "url('images/image_3.jpg')"}}>
						<div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						  <div>
							  <span class="day">02</span>
							  <span class="mos">June</span>
							  <span class="yr">2020</span>
						  </div>
					  </div>
					</a>
				 </div>
			  </div>
			</div>

      <div class="col-md-4 d-flex ftco-animatee">
				<div class="blog-entry justify-content-end">
				<div class="text text-center">
					<a href="blog-single.html" class="block-20 img d-flex align-items-center" style={{backgroundImage: "url('images/image_1.jpg')"}}>
						<div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						  <div>
							  <span class="day">02</span>
							  <span class="mos">June</span>
							  <span class="yr">2020</span>
						  </div>
					  </div>
					</a>
				 	</div>
			  </div>
			</div>

      <div class="col-md-4 d-flex ftco-animatee">
				<div class="blog-entry justify-content-end">
				<div class="text text-center">
					<a href="blog-single.html" class="block-20 img d-flex align-items-center" style={{backgroundImage: "url('images/image_2.jpg')"}}>
						<div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						  <div>
							  <span class="day">02</span>
							  <span class="mos">June</span>
							  <span class="yr">2020</span>
						  </div>
					  </div>
					</a>
				 	</div>
			  </div>
			</div>

      <div class="col-md-4 d-flex ftco-animatee">
				<div class="blog-entry justify-content-end">
				<div class="text text-center">
					<a href="blog-single.html" class="block-20 img d-flex align-items-center" style={{backgroundImage: "url('images/image_3.jpg')"}}>
						<div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						  <div>
							  <span class="day">02</span>
							  <span class="mos">June</span>
							  <span class="yr">2020</span>
						  </div>
					  </div>
					</a>
				 	</div>
			  </div>
			</div>
			
			
		  </div>
		  
		</div>
    </div>
	  </section>
   
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

export default videos
