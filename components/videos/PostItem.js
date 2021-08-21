import Link from 'next/link'
import { backend } from '../../config'
import articleStyles from '../../styles/Article.module.css'


const PostItem = ({ post }) => {
	let content = '';

	if (post) content =  <Link href={{ pathname: '/viewpost', query: { keyword: post.id } }}>
	<div class="col-md-3 d-flex ftco-animat">
			  <div class="blog-entry justify-content-end">
			  <div class="text text-center card">
			  <a  class="block-20 img d-flex align-items-center" style={ post.CoverPhoto != null ? {"backgroundImage": `url(${backend}${post.CoverPhoto})`} :  {"backgroundImage": `url(images/defaults/video.jpg)`}}>
					  <div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						<div>
							<span class="day">OPEN</span>
					  
							<span class="yr">NOW</span> 
						</div>
					</div>
				  </a>
				  <div className="container">
				  <h6 class="heading mb-3"><a href="#">{post.Title.substring('0','27')}</a></h6>
				  </div>
			
				
			  </div>
			</div>
		  </div>
   
  </Link>;
  return (
   <>
   {content}
   </>
  )
}

export default PostItem
