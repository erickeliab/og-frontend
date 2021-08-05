import ArticleItem from '../ArticleItem'
import PostItem from './PostItem'
import articleStyles from '../../styles/Article.module.css'
// import Pagination from "preact-paginate";
import React from 'react';

class PostList extends React.Component {

  render(){
    
    const {posts, smallcaption, Caption}  = this.props
    

  return (

    
	  
    <section class="fto-section mt-5">
		<div class="container">
    		<div class="row justify-content-center pb-5">
          <div class="col-md-7 heading-section text-center ftco-animatee">
          	<span class="subheading">{smallcaption}</span>
            <h2>{Caption}</h2>
          </div>
        </div>
		<div class="container">
		  <div class="row d-flex">
      {posts.map((post) => (
          <PostItem post={post} />
          
      ))}

		
			
		  </div>
      </div>
		</div>
	  </section>
  )
}

}

PostList.defaultProps = {
  smallcaption: 'Learn',
  Caption: 'Now'
}

export default PostList
