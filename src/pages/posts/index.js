import Layout from '@/components/layout'
import {PostListProvider} from '@/context/post-list-context'
import PostList from '@/components/post-list'

const Posts = () => {
  return (<>
    <Layout pageTitle={'All Posts'}>
      <h1 className={'pageTitle'}>All Posts</h1>
      <PostListProvider>
        <PostList limit={10} displayLoadMore={true} />
      </PostListProvider>
    </Layout>
  </>)
}

export default Posts