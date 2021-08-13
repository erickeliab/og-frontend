import Link from 'next/link'
import Markdown from 'markdown-to-jsx';
import { backend } from '../../config'
import articleStyles from '../../styles/Article.module.css'
import CategoryList from '../category/CategoryList';

const PostItem = ({ post }) => {
	
  return (
    <Link href={{ pathname: '/viewpost', query: { keyword: post.id } }}>
      <div class="col-md-12 m-1 row d-flex ftco-animat">
		  <img className="col-md-4 mb-1" height="200" src={`${backend}${post?.CoverPhoto}`} />
		  <div class="block-21 mb-4 col-md-8 d-flex mt-1">
               
			   <div class="text">
			   <Link href={`/post/${post.id}`}>
				   <>
				 <h3 style={pointerStyle} class="heading"><a>{post?.Title}</a></h3>
				 <p style={pointerStyle} class="heading"><a>{post.body?.substr('0','150')}</a></p>
				 </>
				 </Link>
				 <div class="meta">
				
				   <div><a><span class="fa fa-calendar"></span> {post.publisheOn?.substr('0','10')}</a></div>
				
				   <div><a ><span class="fa fa-user"></span> OG</a></div>
				   <div><a ><span class="fa fa-comment"></span> {post.comments.length}</a></div>
				   
				   <section>
					<div class="tag-widget post-tag-container mt-1">
					<div class="tagcloud">
					<a class="tag-cloud-link">{post.Type}</a>
							</div>
						</div>
				
				</section>
				 </div>
			   </div>
			   
			 </div>

				</div>
    
    </Link>
  )
}

const pointerStyle = {
    cursor: 'pointer'
}

export default PostItem
