import Layout from '@/components/layout'

export default function PrivacyPolicy ({ details, content}){
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
  const content = await import(`../content/pages/privacy-policy.md`)

  return {
    props: {
      details: content.attributes,
      content: content.html
    },
  }
}