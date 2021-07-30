import Markdown from 'markdown-to-jsx';
import Link from 'next/dist/client/link';
const RelatedPost = ({post}) => {
    
    return (

    <>
  
            <div class="block-21 mb-4 d-flex">
               
                <div class="text">
                  <h3 style={pointerStyle} class="heading"><a>{post.Title}</a></h3>
                  <div class="meta">
                  <Link href={`/post/${post.id}`}>
                    <div><a><span class="fa fa-calendar"></span> {post.publisheOn.substr('0','10')}</a></div>
                  </Link>
                    <div><a href="#"><span class="fa fa-user"></span> OG</a></div>
                    <div><a href="#"><span class="fa fa-comment"></span> {post.comments.length}</a></div>
                  </div>
                </div>
                
              </div>
   
    </>
)
    
}

const pointerStyle = {
    cursor: 'pointer'
}

export default RelatedPost;