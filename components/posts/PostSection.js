import Markdown from 'markdown-to-jsx';
const PostSection = ({title, body, article}) => {
if (article) {
    return (
        <>
       
        <section id={title} className='mt-1 mb-1 pb-2'>
            <h3>{title}</h3>
            <p id='postbod'><Markdown>{body}</Markdown></p> 
        </section>
        
        </>
    )
}else {
    return (
        <>
         
        <section id={title} className='mt-1 mb-1 pb-2'>
            <h1>{title}</h1>
            <p id='postbody'><Markdown>{body}</Markdown></p> 
        </section>
        
        </>
    )
}
    
}

export default PostSection;