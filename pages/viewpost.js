import { backend, server } from '../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import CategoryList from '../components/category/CategoryList'
import PostSection from '../components/posts/PostSection';
import RelatedPost from '../components/posts/RelatedPost'
import PostList from '../components/posts/PostList'
import CommentList from '../components/comments/CommentList'
import VideoList from '../components/videos/VideoList'
import axios from 'axios';
import { useState } from 'react'



const Post = ({query}) => {

  // const { query } = useRouter(); 
  let [post,getPost] = useState({})
  let [posts,getPosts] = useState([])
  let [categories,getCategories] = useState([])
  let [articles,makeArticles] = useState('')
  let [articlesLinst,makearticlesLinst] = useState('')
  let [relatedposts,makerelatedposts] = useState('')
  let [categiryList,makecategiryList] = useState('')
  let [commentList,makecommentList] = useState('')


  axios.get(`${backend}/categories/`).then(function(res){
    getCategories(res.data)

  })


  axios.get(`${backend}/posts/`).then(function(res){
    getPosts(res.data)

  })
 
  axios.get(`${backend}/posts/${query.keyword}`).then(function(res){
    post = res.data;


    getPost(post)
    makeArticles(post.articles.map(article => (<PostSection title={article.Title} body={article.Body} article={true}/>)));
    makearticlesLinst(post.articles.map(article => (<li><a href={"#"+article.Title}>{article.Title}<span class="fa fa-chevron-right"></span></a></li>)))
    makerelatedposts(posts ? posts.map(post => (<RelatedPost post={post} />)) : '');
    makecategiryList(post.categories.length > 0 ? <CategoryList categories={post.categories} /> : '');
    makecommentList(<CommentList comments={post.comments} post={post}/>);

  
  })

  
  return (
    <>

<Meta title={post.Title} description={post.Title} />
{/* <PageHeader pagename={post.Title} heading={''} imagepath={post.CoverPhoto} /> */}

<section class="ftco-section ftco-degree-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ftco-animatee mb-2">
            <PostSection title={post.Title ? post.Title : ''} body={post.body ? post.body : ''} article={false} videos={post.videos}/>
             {articles}

            {CategoryList}
            {commentList}
            {/* <CommentList comments={post.comments} post={post} /> */}
            
          </div> 
          <div class="col-lg-4 sidebar pl-lg-5 ftco-animatee mt-3">
            
            <div class="sidebar-box ftco-animatee">
              <div class="categories">
                <h3>Articles</h3>
                {articlesLinst}
                
              </div>
            </div>

            <div class="sidebar-box ftco-animatee">
              <h3>Other Posts</h3>
             
              {relatedposts}
              
            </div>

            <div class="sidebar-box ftco-animatee">
              <h3>Other Categories</h3>
              <div class="tagcloud">
              <CategoryList categories={categories} />
              
               
              </div>
            </div>
            <div class="sidebar-box">
              
            </div>
          </div>

        </div>
        <br />
      <a href='/' class="btn py-3 px-4 btn-secondary">Go Back</a>
      </div>
      
    </section>
   

    </>
  )
}

Post.getInitialProps = async ({query}) => {
  
  // const res = await fetch(`${backend}/posts/1`)
  // const post = await res.json()

  // const CategoryRes = await fetch(`${backend}/categories/`)
  // const categories =  await CategoryRes.json()

  

  // const postsres = await fetch(`${backend}/posts?id_gte=1`)
  // const posts = await postsres.json()

  return {
  
      query

  }
}




// export const getStaticProps = async (context) => {
 

//   const res = await fetch(`${backend}/posts/1`)
//   const post = await res.json()

//   const CategoryRes = await fetch(`${backend}/categories/`)
//   const categories =  await CategoryRes.json()

//   const postsres = await fetch(`${backend}/posts?id_gte=1`)
//   const posts = await postsres.json()

//   return {
//     props: {
//       post,
//       categories,
//       posts
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${backend}/posts/`)
//   const posts = await res.json()

//   const ids = posts.length > 0 ?  posts.map((post) => post.id) : null
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }


export default Post
