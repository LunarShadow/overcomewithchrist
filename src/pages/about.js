import Layout from '@/components/layout'
import matter from 'gray-matter'
import AuthorCard from '@/components/author-card'

export default function About ({ details, content}){
  return (
    <>
      <Layout pageTitle={details.title}>
        <h1 className={'pageTitle'}>{details.title}</h1>
        <AuthorCard />
        <h3 className={'pageTitle'}>Purpose</h3>
        <div className={'px-5 mb-3 font-light'} dangerouslySetInnerHTML={{__html: content}} />
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