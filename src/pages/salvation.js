import Layout from '@/components/layout'
import PostList from '@/components/post-list'
import {PostListProvider} from '@/context/post-list-context'

const Salvation = ({ details, content }) => {
  return (
    <>
      <Layout pageTitle={details.title} >
        <h1 className={'pageTitle'}>{details.title}</h1>
        <div className={'p-3'} dangerouslySetInnerHTML={{__html: content}} />
        <PostListProvider>
          <PostList limit={5} displayLoadMore={true} category={'Salvation'} />
        </PostListProvider>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const content = await import(`../content/pages/salvation.md`)

  return {
    props: {
      details: content.attributes,
      content: content.html
    },
  }
}

export default Salvation