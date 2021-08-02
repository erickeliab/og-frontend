import Iframe from 'react-iframe'
import Link from 'next/dist/client/link'
const VideoPlay = ({ videolink }) => {
  return (
    <Link href={`/post/`}>
      <div class="col-md-12 ftco-animat">
            <Iframe url={videolink}
                width="100%"
                height="450px"
                id="myId"
                className="ogvideo"
                display="initial"
                position="relative"/>
			</div>
     
    </Link>
  )
}

export default VideoPlay
