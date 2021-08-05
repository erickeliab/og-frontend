// import Meta from '../components/Meta'
// import PostList from '../components/videos/PostList'
// import { Fragment } from 'react'
// import PageHeader from '../components/PageHeader'
// import { backend } from '../config'



// const videos = ({posts, smallcaption, Caption , pagename, heading, imagepath}) => {
// 	if(posts.length > 0){
// 		return (
// 			<Fragment>
// 				<PageHeader pagename={pagename} heading={heading} imagepath={imagepath} />
// 				 <PostList posts={posts} smallcaption={smallcaption} Caption={Caption} />
// 			</Fragment>
// 		) 
// 	}else return (
// 			<Fragment>
// 				<PageHeader pagename={pagename} heading={heading} imagepath={imagepath} />
// 				 <p className="card mt-3 mb-3  container alert"> <h2>There are no videos yet</h2></p>
// 			</Fragment>

// 		)
// 	}

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:1337/posts`)
//   let posts = await res.json()
//   posts = posts.filter(post => (post.Type == 'Videos'))

//   return {
//     props: {
//       posts,
// 	  smallcaption: 'Watch',
// 	  Caption: 'Videos',
// 	  pagename: 'Videos',
// 	  heading : 'Watch Now',
// 	  imagepath : `/uploads/mohammad_rahmani_Fx34_Keq_I_Ew_unsplash_228c036ba4.jpg?4456400.899999976`
//     },
//   }
// }

// export default videos



import Meta from '../components/Meta'
import PostList from '../components/videos/PostList'
import { Fragment } from 'react'
import PageHeader from '../components/PageHeader'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'
import { backend } from '../config';
import PostLoading from '../components/posts/PostLoading';



   
const videos = (props) => {
    const [isLoading, setLoading] = useState(false); //State for the loading indicator
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

        /*
            Posts fetching happens after page navigation, 
            so we need to switch Loading state on Router events.
        */
    useEffect(() => { //After the component is mounted set router event handlers
        Router.events.on('routeChangeStart', startLoading); 
        Router.events.on('routeChangeComplete', stopLoading);

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);

        }
    }, [])

        //When new page selected in paggination, we take current path and query parrams.
        // Then add or modify page parram and then navigate to the new route.
        
    const pagginationHandler = (page) => {
        const currentPath = props.router.pathname;
        const currentQuery = props.router.query;
        currentQuery.page = page.selected + 1;

        props.router.push({
            pathname: currentPath,
            query: currentQuery,
        });

    };
        
        //Conditional rendering of the posts list or loading indicator
    let content = null;
    if (isLoading)
        content = <PostLoading />;
    else {
                //Generating posts list

				if(props.posts.length > 0){
							content =  (
								<Fragment>
									<PageHeader pagename={props.pagename} heading={props.heading} imagepath={props.imagepath} />
									 <PostList posts={props.posts} smallcaption={props.smallcaption} Caption={props.Caption} />
								</Fragment>
							) 
						}else content = (
								<Fragment>
									<PageHeader pagename={props.pagename} heading={props.heading} imagepath={props.imagepath} />
									 <p className="container alert"> <h2>There are no posts yet</h2></p>
								</Fragment>
					
						)
					}
   
    

    return (
        <div className="">
          
                {content}
            <div className="container">
			<ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination btn'}

                initialPage={props.currentPage - 1}
                pageCount={props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
            />
			</div>

           
        </div>
    );
};

//Fetching posts in get Intial Props to make the app seo friendly
videos.getInitialProps = async ({ query }) => {
    const page = query.page || 1; //if page empty we request the first page
    const limit = 4
    const start = limit * (page-1);
    const postx = await axios.get(`${backend}/posts?Type=Videos&_start=${start}&_limit=${limit}`);
    //  console.log(posts.data)
	
    const coun = await axios.get(`${backend}/posts/count`)
    
    const count = coun.data
    const pagecount = count%limit > 0 ? Math.floor((count/limit) + 1) : count/limit;


    return {
        totalCount: count,
        pageCount: pagecount,
        currentPage: page,
        perPage: limit,
        posts: postx.data,
		smallcaption: 'Watch',
	  Caption: 'Videos',
	  pagename: 'Videos',
	  heading : 'Watch Now',
	  imagepath : `/uploads/mohammad_rahmani_Fx34_Keq_I_Ew_unsplash_228c036ba4.jpg?4456400.899999976`
    };
}


export default withRouter(videos);