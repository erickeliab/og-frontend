import ArticleItem from '../ArticleItem'
import PostItem from './PostItem'
import articleStyles from '../../styles/Article.module.css'
import React from 'react';
import PostList from './PostList';

class PostLoading extends React.Component {

  render(){
    
    let posts = [1,2,3,4,5,6,7,];
    const loadingPost = [
      {
        id : '',
        Title : 'Loading...',
        body: 'Loading...',
        Type: 'Laserfiche',
        published_at: 'Loading...'
      },
      {
        id : '',
        Title : 'Loading...',
        body: 'Loading...',
        Type: 'Gaming',
        published_at: 'Loading...'
      },
      {
        id : '',
        Title : 'Loading...',
        body: 'Loading...',
        Type: 'Laserfiche',
        published_at: 'Loading...'
      }
    ]
    let laserp = <PostList posts={loadingPost} smallcaption={'loading...'} Caption={'Loading...'} />;


  return (
    <> 
    {laserp}
    </>
  )
}

}

PostLoading.defaultProps = {
  smallcaption: 'Learn',
  Caption: 'Now'
}

export default PostLoading
