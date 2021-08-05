import Link from 'next/link'
import { backend } from '../../config'
import articleStyles from '../../styles/Article.module.css'


const PostItem = ({ post }) => {
	let content = '';

	if (post) content =  <Link href={`/post/${post.id}`}>
	<div class="col-md-3 d-flex ftco-animat">
			  <div class="blog-entry justify-content-end">
			  <div class="text text-center card">
			  <a  class="block-20 img d-flex align-items-center" style={{"backgroundImage": `url(${backend}${post?.CoverPhoto})`}}>
					  <div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						<div>
							<span class="day">OPEN</span>
					  
							<span class="yr">NOW</span> 
						</div>
					</div>
				  </a>
				<h3 class="heading mb-3"><a href="#">{post.Title.substring('0','27')}</a></h3>
				
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
