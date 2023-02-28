import Layout from '@/components/layout'
import matter from 'gray-matter'

export default function TermsAndConditions ({ details, content}){
  return (
    <>
      <Layout pageTitle={details.title}>
        <h1 className={'pageTitle'}>{details.title}</h1>
        <div className={'p-3 text-justify'} dangerouslySetInnerHTML={{__html: content}} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const content = await import(`../content/pages/terms-and-conditions.md`)
  const markdown = matter(content.default)

  return {
    props: {
      details: markdown.data,
      content: markdown.content
    },
  }
}