import Markdown from 'markdown-to-jsx';
import VideoList from '../videos/VideoList';
const PostSection = ({title, body, article, videos}) => {
    let videoos = videos?.length > 0 ? <VideoList videos={videos} /> : '';
if (article) {
    return (
        <>
       
        <section id={title} className='mt-1 mb-1 pb-2'>
            <h3>{title}</h3>
            <p id='postbod' className="container" ><Markdown>{body}</Markdown></p>
           

        </section>
        {videoos}
        </>
    )
}else {
    return (
        <>
         
        <section id={title} className='mt-1 mb-1 pb-2'>
            <h1>{title}</h1>
            <p id='postbody' className="container"><Markdown>{body}</Markdown></p>
           
        </section>
        {videoos}
        </>
    )
}
    
}

export default PostSection;