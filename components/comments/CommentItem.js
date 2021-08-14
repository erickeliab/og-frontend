import Link from 'next/link'



const CommentItem = ({ comment }) => {
  return (
    <>
  			 <li class="comment container col-md-10 row">
                  <div class="vcard bio col-1" >
                    {/* <img src="http://localhost:1337/uploads/og_bg_f069d02bb0.jpg" alt="Image placeholder"/> */}
                    <p style={circleText}>
                    <b >{comment.Name.substr('0','1')}</b>
                    </p>
                  </div>
                  <div class="comment-body col-8">
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

let initialStyle = () => {

  return {
    fontSize: '100px'
  }
}

let circleText = {
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    bordeRadius: '30%',
    fontSize: '30px',
    color: '#fff',
    textAlign: 'center',
    background: '#000'

}