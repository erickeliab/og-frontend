import Meta from '../components/Meta'
import PostList from '../components/videos/PostList'
import { Fragment } from 'react'
import PageHeader from '../components/PageHeader'
import { backend } from '../config'



const videos = ({posts, smallcaption, Caption , pagename, heading, imagepath}) => {
	if(posts.length > 0){
		return (
			<Fragment>
				<PageHeader pagename={pagename} heading={heading} imagepath={imagepath} />
				 <PostList posts={posts} smallcaption={smallcaption} Caption={Caption} />
			</Fragment>
		) 
	}else return (
			<Fragment>
				<PageHeader pagename={pagename} heading={heading} imagepath={imagepath} />
				 <p className="card mt-3 mb-3  container alert"> <h2>There are no videos yet</h2></p>
			</Fragment>

		)
	}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/posts`)
  let posts = await res.json()
  posts = posts.filter(post => (post.Type == 'Videos'))

  return {
    props: {
      posts,
	  smallcaption: 'Watch',
	  Caption: 'Videos',
	  pagename: 'Videos',
	  heading : 'Watch Now',
	  imagepath : `/uploads/mohammad_rahmani_Fx34_Keq_I_Ew_unsplash_228c036ba4.jpg?4456400.899999976`
    },
  }
}

export default videos
