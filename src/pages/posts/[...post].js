import matter from 'gray-matter'
import Layout from '@/components/layout'
import PostList from '@/components/post-list'
import {PostListProvider} from '@/context/post-list-context'
import Image from 'next/image'

const Post = ({details, content}) => {
  const authorName = 'Cyntia Seumo'
  return (<Layout pageTitle={details.title}>
      <div className={'relative w-full h-72 md:h-80 -z-10'}>
        <Image src={`/${details.featuredImage}`} alt={details.title} fill />
      </div>
      <div className={'p-3 -mt-7 md:-mt-10 rounded-3xl bg-pastelOrange '}>
        <p className={'font-light text-base text-neutral-600 pl-1'}>{details.category}</p>
        <h2 className={'font-light'}>{details.title}</h2>
        <div>
          <p className={'font-light text-base text-neutral-600'}>{details.author || authorName} | {details.date}</p>
        </div>
        <div className={'my-5'} dangerouslySetInnerHTML={{__html: content}} />
      </div>
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