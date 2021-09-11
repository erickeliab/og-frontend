import Head from 'next/head'
import { backend } from '../config'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta name="google-site-verification" content="uMP9dLgiEOBWunUTz6NAqGZSVBiws9SQ8BZtK82fEpk" />
      <link rel='icon' href={`${backend}/uploads/Group_4_5d759c3286.png`} />
      <title>{title}</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PRHM62Q6RK"></script>
      <script type="text/javascript" src="js/googleverification.js"></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1716957230308002"
     crossorigin="anonymous"></script>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'The OG Experience',
  keywords: 'laserfiche, gaming, video tutorials',
  description: 'Get contents concerning laserfiche, gaming and adventures from an experienced tech geek',
}

export default Meta
