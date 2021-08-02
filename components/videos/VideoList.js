import ArticleItem from '../ArticleItem'
import PostItem from './PostItem'
import articleStyles from '../../styles/Article.module.css'
import React from 'react';
import VideoPlay from './VideoPlay';


const VideoList = ({ videos }) => {

      // const posts = this.props.posts;

  return (

    
	  
    <section class="fto-section mt-5">

    		
		<div class="">
		  <div class="">
      {videos.map((post) => (
          <VideoPlay videolink={post.VideoLink} />
          
      ))}

		  </div>

		</div>
	  </section>
  )


}

VideoList.defaultProps = {
  smallcaption: 'Learn',
  Caption: 'Now'
}

export default VideoList
