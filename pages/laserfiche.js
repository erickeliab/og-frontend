import Meta from '../components/Meta'
import PostList from '../components/posts/PostList'
import { Fragment } from 'react'
import PageHeader from '../components/PageHeader'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'
import { backend } from '../config';
import PostLoading from '../components/posts/PostLoading';

   
const Laserfiche = (props) => {
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
    let pagination = '';
    if (isLoading)
        content = <PostLoading />;

       
    else {
                //Generating posts list

				if(props.posts.length > 0){
							content =  (
								<Fragment>
									<PageHeader pagename={props.pagename} heading={''} imagepath={props.imagepath} />
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
Laserfiche.getInitialProps = async ({ query }) => {
    const page = query.page || 1; //if page empty we request the first page
    const limit = 8
    const start = limit * (page-1);
    const postx = await axios.get(`${backend}/posts?Type=Laserfiche&_start=${start}&_limit=${limit}`);
    //  console.log(posts.data)
	
    const coun = await axios.get(`${backend}/posts/count`)
    
    const count = coun.data
    const pagecount = count%limit > 0 ? Math.floor((count/limit) + 1) : count/limit;


    return {
        totalCount: count ? count : 3,
        pageCount: pagecount != null ? pagecount : 1,
        currentPage: page,
        perPage: limit,
        posts: postx.data.length ? postx.data : '',
		smallcaption: 'learn',
	  	Caption: 'Laserfiche',
	  	pagename: 'Laserfiche',
	  	heading : 'Learn Now',
	  	imagepath : `/uploads/balkouras_nicos_nc_O_Qx_Ze8_Krw_unsplash_0f19813128.jpg`
    };
}


export default withRouter(Laserfiche);