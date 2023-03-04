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
        <h3 className={'pl-5'}>Recommended</h3>
        <PostListProvider>
          <PostList limit={4} displayLoadMore={false} skipFirst={true} />
        </PostListProvider>
        <div className={'text-center mx-auto text-black cursor-pointer font-semibold my-5 px-2 py-1 bg-primary rounded-3xl w-36'}>
          <Link className={'text-white hover:text-black'} href={'/posts'} >View All Posts</Link>
        </div>
      </Layout>
    </>
  )
}
