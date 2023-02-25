import Layout from '@/components/layout'
import Link from 'next/link'
import matter from 'gray-matter'

export default function About ({ details, content}){
  return (
    <>
      <Layout pageTitle={details.title}>
        <h1>{details.title}</h1>
        <div> Image </div>
        <div>author card</div>
        <h3>Purpose</h3>
        <div>{content}</div>
        <Link href={'/posts'} >View All Posts</Link>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const content = await import(`../content/pages/about.md`)
  const markdown = matter(content.default)

  return {
    props: {
      details: markdown.data,
      content: markdown.content
    },
  }
}