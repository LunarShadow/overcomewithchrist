import Layout from '@/components/layout'
import PostList from '@/components/post-list'
import {PostListProvider} from '@/context/post-list-context'
import Image from 'next/image'
import {generateRssFeed} from '@/utils/feed'

const Post = ({content, attributes}) => {

  const authorName = 'Cyntia Seumo'
  return (<Layout pageTitle={attributes.title}>
      <div className={'relative w-full h-72 md:h-80 -z-10'}>
        <Image src={attributes.featuredImage} alt={attributes.title} fill />
      </div>
      <div className={'p-3 -mt-7 md:-mt-10 rounded-3xl bg-pastelOrange '}>
        <p className={'font-light text-base text-neutral-600 pl-1'}>{attributes.category}</p>
        <h2 className={'font-light'}>{attributes.title}</h2>
        <div>
          <p className={'font-light text-base text-neutral-600'}>{attributes.author || authorName} | {attributes.date}</p>
        </div>
        <div className={'my-5'} dangerouslySetInnerHTML={{__html: content}}  />
      </div>
      <h3>More Posts</h3>
      <PostListProvider>
        <PostList limit={3} displayLoadMore={false} />
      </PostListProvider>
    </Layout>)
}

export async function getStaticProps({...ctx}) {
  await generateRssFeed()
  const {post} = ctx.params
  const content = await import(`../../content/posts/${post[0]}.md`)

  return {
    props: {
      content: content.html, attributes: content.attributes
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