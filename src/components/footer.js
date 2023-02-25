import Link from 'next/link'

export default function Footer(){
  return(
    <>
      <div>
        <ul>
          <li>Back To Top</li>
          <li>Shop</li>
          <li>All Posts</li>
          <li>About Me</li>
        </ul>
      </div>
      <div>
        {new Date().getFullYear()} &copy; <Link href={'/'}>Overcome with Christ </Link> <br />
        <Link href="/privacy-policy">Privacy</Link> | <Link href="/terms-and-conditions">Terms</Link>
      </div>
    </>
  )
}