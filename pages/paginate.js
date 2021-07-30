import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'
import { backend } from '../config';



   
const Home = (props) => {
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
        content = <div>Loading...</div>;
    else {
                //Generating posts list
        content = (
            <ul>
                {props.posts.map(post => {
                    return <li key={post.id}>{post.Title}</li>;
                })}
            </ul>
        );
    }

    return (
        <div className="container">
            <h1>Posts List with Pagination in Next.js</h1>
            <div className="posts">
                {content}
            </div>

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
    );
};

//Fetching posts in get Intial Props to make the app seo friendly
Home.getInitialProps = async ({ query }) => {
    const page = query.page || 1; //if page empty we request the first page
    const limit = 4
    const start = limit * (page-1);
    const postx = await axios.get(`${backend}/posts?_start=${start}&_limit=${limit}`);
    //  console.log(posts.data)

    const coun = await axios.get(`${backend}/posts/count`)
    
    const count = coun.data
    const pagecount = count%4 > 0 ? Math.floor((count/4) + 1) : count/4;


    return {
        totalCount: count,
        pageCount: pagecount,
        currentPage: page,
        perPage: limit,
        posts: postx.data,
    };
}


export default withRouter(Home);