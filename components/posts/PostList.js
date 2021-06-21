import ArticleItem from '../ArticleItem'
import PostItem from './PostItem'
import articleStyles from '../../styles/Article.module.css'

const PostList = ({ posts }) => {
  return (

    
	  
    <section class="fto-section mt-5">
		<div class="container">
    		<div class="row justify-content-center pb-5">
          <div class="col-md-7 heading-section text-center ftco-animatee">
          	<span class="subheading">Learn</span>
            <h2>LASERFICHE</h2>
          </div>
        </div>
		<div class="container">
		  <div class="row d-flex">
      {posts.map((post) => (
          <PostItem post={post} />
          
      ))}
			{posts.map((post) => (
          <PostItem post={post} />
          
      ))}

      {posts.map((post) => (
          <PostItem post={post} />
          
      ))}
		
			
		  </div>
      </div>
		</div>
	  </section>
  )
}

export default PostList
