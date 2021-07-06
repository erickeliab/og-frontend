import Meta from '../components/Meta'
import PostList from '../components/videos/PostList'
import { Fragment } from 'react'
import PageHeader from '../components/PageHeader'
import { backend } from '../config'



const videos = ({posts, smallcaption, Caption , pagename, heading, imagepath}) => {
	return (
		<Fragment>
			<PageHeader pagename={pagename} heading={heading} imagepath={imagepath} />
			 <PostList posts={[...posts,...posts,...posts]} smallcaption={smallcaption} Caption={Caption} />
		</Fragment>
	) 
	}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
	  smallcaption: 'Watch',
	  Caption: 'Videos',
	  pagename: 'Videos',
	  heading : 'Watch Now',
	  imagepath : `${backend}/uploads/mohammad_rahmani_Fx34_Keq_I_Ew_unsplash_228c036ba4.jpg?4456400.899999976`
    },
  }
}

export default videos
