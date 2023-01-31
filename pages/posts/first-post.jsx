import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout'

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My first Post</title>
      </Head>
      {/* <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => console.log(`script loading success`)}
      /> */}
      <h1>My First Post is here....</h1>
      <Image
        alt='pfp'
        src='/images/profile.jpg'
        height={144}
        width={144}
      />
      <h2>
        <Link href='/'>Back Home</Link>
      </h2>
    </Layout>
  )
}

export default FirstPost
