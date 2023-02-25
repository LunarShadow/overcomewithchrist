import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <h1> 404 </h1>
      <p> oops, not sure how you got here but this page doesn&apos;t exist.</p>
      <Link href={'/'}> Take me to greener pastures </Link>
    </>
  )
}

export default NotFound