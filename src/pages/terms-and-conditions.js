import Layout from '@/components/layout'

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

  return {
    props: {
      details: content.attributes,
      content: content.html
    },
  }
}