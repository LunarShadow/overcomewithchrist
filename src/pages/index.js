import Layout from '@/components/layout'
import Link from 'next/link'
import PostList from '@/components/post-list'
import {PostListProvider} from '@/context/post-list-context'


export default function Home (){
  return (
    <>
      <Layout pageTitle={'Blog'}>
        <h1>Blog</h1>
        <div> Featured/Latest Post</div>
        <h3>Recommended</h3>
        <PostListProvider>
          <PostList limit={3} displayLoadMore={false} />
        </PostListProvider>
        <Link href={'/posts'} >View All Posts</Link>
      </Layout>
    </>
  )
}
