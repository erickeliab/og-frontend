import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='http://localhost:1337/uploads/Group_4_5d759c3286.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'The OG Experience',
  keywords: 'laserfiche, gaming, video tutorials',
  description: 'Get contents concerning laserfiche, gaming and adventures from an experienced tech guy',
}

export default Meta
