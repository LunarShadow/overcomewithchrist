import Link from 'next/link'

export default function Footer(){
  return(
    <>
      <div className={'bg-white text-primary text-center'}>
        <ul>
          <li className={'py-5 border border-b-1 border-b-gray-400'}>
            <Link href={'#'}>Back To Top</Link>
          </li>
          <li className={'py-5 border border-b-1 border-b-gray-400'}>
            <Link href={'/shop'}>Shop</Link>
          </li>
          <li className={'py-5 border border-b-1 border-b-gray-400'}>
            <Link href={'/posts'}>All Posts</Link>
          </li>
          <li className={'py-5 border border-b-1 border-b-gray-400'}>
            <Link href={'/about'}>About Me</Link>
          </li>
        </ul>
      </div>
      <div className={'bg-white text-primary py-5 px-2 text-center'}>
        {new Date().getFullYear()} &copy; <Link href={'/'}>Overcome with Christ </Link> <br />
        <Link href="/privacy-policy">Privacy</Link> | <Link href="/terms-and-conditions">Terms</Link>
      </div>
    </>
  )
}