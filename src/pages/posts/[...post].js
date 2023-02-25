import matter from 'gray-matter'
import Layout from '@/components/layout'
import PostList from '@/components/post-list'
import {PostListProvider} from '@/context/post-list-context'

const Post = ({details, content}) => {
  return (<Layout pageTitle={details.title}>
      <div>{details.featuredImage}</div>
      <p>{details.category}</p>
      <h1>{details.title}</h1>
      <div>
        <p>{details.author}</p>
        <p>{details.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <h3>More Posts</h3>
      <PostListProvider>
        <PostList limit={3} displayLoadMore={false} />
      </PostListProvider>
    </Layout>)
}

export async function getStaticProps({...ctx}) {
  const {post} = ctx.params
  const content = await import(`../../content/posts/${post[0]}.md`)
  const markdown = matter(content.default)
  return {
    props: {
      details: markdown.data, content: markdown.content
    }
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    return keys.map((key) => {
      return key.replace(/^.*[\\\/]/, '').slice(0, -3)
    })
  })(require.context('../../content/posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/posts/${slug}`)
  return {
    paths, fallback: false
  }
}

export default Post