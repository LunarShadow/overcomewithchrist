import Layout from '@/components/layout'
import Link from 'next/link'
import PostList from '@/components/post-list'
import {PostListProvider} from '@/context/post-list-context'
import FeaturedPostCard from '@/components/featured-post-card'


export default function Home (){
  return (
    <>
      <Layout pageTitle={'Blog'}>
        <h1 className={'pageTitle'}>Blog</h1>
        <PostListProvider>
          <FeaturedPostCard />
        </PostListProvider>
        <h3 className={'pageTitle'}>Recommended</h3>
        <PostListProvider>
          <PostList limit={3} displayLoadMore={false} />
        </PostListProvider>
        <Link href={'/posts'} >View All Posts</Link>
      </Layout>
    </>
  )
}
