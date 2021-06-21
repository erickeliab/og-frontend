import PostList from '../components/posts/PostList'
import {Fragment} from 'react'
export default function Posts({posts})
{return (
    <Fragment>
         <PostList posts={posts} />
    </Fragment>
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

