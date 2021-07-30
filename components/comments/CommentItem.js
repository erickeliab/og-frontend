import Link from 'next/link'



const CommentItem = ({ comment }) => {
  return (
    <>
  			 <li class="comment">
                  <div class="vcard bio">
                    <img src="http://localhost:1337/uploads/og_bg_f069d02bb0.jpg" alt="Image placeholder"/>
                  </div>
                  <div class="comment-body">
                    <h3>{comment.Name}</h3>
                    <div class="meta">{comment.created_at.substr('0','10')}</div>
                    <p>{comment.Body}</p>
                    <p className="ml-2" hidden={comment.Reply == null ? true : false}>  <small><b className="mr-2">OG</b>Replied</small> <br />
                      <a class="reply m-1 p-2">{comment.Reply}</a></p>
                  </div>
                </li>
    </>
  )
}

export default CommentItem
