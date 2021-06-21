import { server } from '../config'
import ArticleList from '../components/ArticleList'
import PostList from '../components/posts/PostList'
import Header from '../components/Header'
import Meta from '../components/Meta'

export default function Home({ posts }) {
  console.log(posts)
  return (
	  <>
	   <Meta title='OG - Home' />
	  <Header />
    <div>
    
      <section class="ftco-intro">
    	<div class="container-fluid">
    		<div class="row no-gutters">
    			<div class="col-md-4 d-flex">
    				<div class="intro aside-stretch d-lg-flex w-100">
    					<div class="icon">
    						<span class="flaticon-engineers"></span>
    					</div>
    					<div class="text">
    						<h2>Laserfiche</h2>
    						<p>This is where Laserfiche CMS is taught to the final chapter</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-md-4 d-flex">
    				<div class="intro color-1 d-lg-flex w-100">
    					<div class="icon">
    						<span class="flaticon"></span>
    					</div>
    					<div class="text">
    						<h2>Gaming</h2>
    						<p>Stream my gaming videos and witness how i win every challange that comes myway</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-md-4 d-flex">
    				<div class="intro color-2 d-lg-flex w-100">
    					<div class="icon">
    						<span class="flaticon"></span>
    					</div>
    					<div class="text">
    						<h2>Videos</h2>
    						<p>Watch videos directly from my youtube channel and have fun with my collection</p>
    					</div>
    				</div>
    			</div>
    			
    		</div>
    	</div>
    </section>
      <PostList posts={posts} />

      
    </div>

	<section class="ftco-counter ftco-section ftco-no-pt mt-4 ftco-no-pb img" id="section-counter">
    	<div class="container">
    		<div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="390">0</strong>
                <span>Form</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="600">0</strong>
                <span>Repository</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="12">0</strong>
                <span>Workflow</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="540">0</strong>
                <span>Quickfield</span>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>


	

	<section class="ftco-section">
		<div class="container">
    		<div class="row justify-content-center pb-5">
          <div class="col-md-7 heading-section text-center ftco-animate">
          	<span class="subheading">Watch My</span>
            <h2>VIDEOS</h2>
          </div>
        </div>
		<div class="container">
		  <div class="row d-flex">
			<div class="col-md-4 d-flex ftco-animate">
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
			<div class="col-md-4 d-flex ftco-animate">
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
			<div class="col-md-4 d-flex ftco-animate">
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

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
