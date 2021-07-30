import Meta from '../components/Meta'
import PostList from '../components/posts/PostList'
import { Fragment } from 'react'
import PageHeader from '../components/PageHeader'
import { backend } from '../config'

const gaming = ({posts, smallcaption, Caption , pagename, heading, imagepath}) => {
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
				 <p className="container alert"> <h2>There are no posts yet</h2></p>
			</Fragment>

	)
	
	}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/posts`)
  let posts = await res.json()
  posts = posts.filter(post => (post.Type == 'Laserfiche'))

  return {
    props: {
      posts,
	  smallcaption: 'i play',
	  Caption: 'Games',
	  pagename: 'Gaming',
	  heading : 'Watch Now',
	  imagepath : `/uploads/balkouras_nicos_nc_O_Qx_Ze8_Krw_unsplash_0f19813128.jpg`
    },
  }
}

export default gaming
