import Meta from '../components/Meta'
import PostList from '../components/posts/PostList'
import { Fragment } from 'react'
import PageHeader from '../components/PageHeader'
import { backend } from '../config'

const laserfiche = ({posts, smallcaption, Caption , pagename, heading, imagepath}) => {
	return (
		<Fragment>
			<PageHeader pagename={pagename} heading={heading} imagepath={imagepath} />
			 <PostList posts={posts} smallcaption={smallcaption} Caption={Caption} />
		</Fragment>
		) 
	}

export const getStaticProps = async () => {
  const res = await fetch(`${backend}/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
	  smallcaption: 'learn',
	  Caption: 'Laserfiche',
	  pagename: 'Laserfiche',
	  heading : 'Learn Now',
	  imagepath : 'images/og-bg.jpg'
    },
  }
}

export default laserfiche
