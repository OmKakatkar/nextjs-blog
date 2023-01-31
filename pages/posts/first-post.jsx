import Image from 'next/image'
import Link from 'next/link'

function FirstPost() {
  return (
    <>
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
    </>
  )
}

export default FirstPost
