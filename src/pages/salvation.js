import Layout from '@/components/layout'
import matter from 'gray-matter'
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
  const markdown = matter(content.default)

  return {
    props: {
      details: markdown.data,
      content: markdown.content
    },
  }
}

export default Salvation