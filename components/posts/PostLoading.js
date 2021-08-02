import ArticleItem from '../ArticleItem'
import PostItem from './PostItem'
import articleStyles from '../../styles/Article.module.css'
import React from 'react';

class PostLoading extends React.Component {

  render(){
    
    let posts = [1,2,3,4,5,6,7,];
    

  return (

    
	  
    <section class="fto-section mt-5">
		<div class="container">
    		<div class="row justify-content-center pb-5">
          <div class="col-md-7 heading-section text-center ftco-animatee">
          	<span class="subheading"></span>
            <h2></h2>
          </div>
        </div>
		<div class="container">
		  <div class="row d-flex">
      {posts.map((post) => (
         
          <div class="col-md-4 d-flex ftco-animat">
          <div class="blog-entry justify-content-end">
          <div class="text text-center">
              <a  class="block-20 img d-flex align-items-center" style={{"backgroundImage": `url('')`}}>
                  <div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
                    <div>
                      
                    </div>
                </div>
              </a>
         
          </div>
        </div>
      </div>

      ))}

		  </div>
      </div>
		</div>
	  </section>
  )
}

}

PostLoading.defaultProps = {
  smallcaption: 'Learn',
  Caption: 'Now'
}

export default PostLoading
