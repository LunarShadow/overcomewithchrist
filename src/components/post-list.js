import Link from 'next/link'
import {useContext, useEffect, useMemo, useState} from 'react'
import {PostListContext} from '@/context/post-list-context'
import Image from 'next/image'

const PostList = ({limit, displayLoadMore, category = null}) => {
  const {postList} = useContext(PostListContext)
  const [showMore, setShowMore] = useState(displayLoadMore)
  const [index, setIndex] = useState(limit)
  const [list, setList] = useState([])

  // cache the sortList between re-renders
  const categoryList = useMemo(() => sortByCategory(postList, category), [postList, category])
  // rerender the page each time categoryList, setList, or index changes
  useEffect(() => {
    setList(categoryList?.slice(0, index))
  }, [setList, categoryList, index])

  // add more items to the list of post based on the amount of items set.
  // concats the next sets of items to the original array then updates the state
  // of index, list, and showMore
  const loadMore = () => {
    const newIndex = index + limit
    const newShowMore = newIndex < (categoryList?.length - 1)
    const newList = list.concat(categoryList?.slice(index, newIndex))
    setIndex(newIndex)
    setList(newList)
    setShowMore(newShowMore)
  }

  return (<>
      <div>
        {!list && <div>No posts!</div>}
        <ul>
          {list && list.map((post) => {
            return (<li key={post.slug} className={'bg-white rounded-lg drop-shadow-lg w-10/12 mx-auto my-7'}>
                <p className={'grid grid-cols-4 content-center items-center'}>
                  <div className={'col-span:1 p-3'}>
                    <div className={'relative w-full h-32'}>
                    <Image className={'rounded-xl'} src={`/${post?.details.featuredImage}`} alt={post?.details.title}
                           fill />
                    </div>
                  </div>
                  <Link className={'col-span-3 p-3'} href={`/posts/${post.slug}`}>
                    <span className={'block text-base text-black font-light text-gray-500'}>{post.details.category}</span>
                    <span className={'block leading-6 text-xl text-black font-semibold py-2'}>{post.details.title}</span>
                    <span className={'block text-sm text-gray-400'}>{post.details.date}</span>
                  </Link>
                </p>
              </li>)
          })}
        </ul>
        {showMore && <button onClick={loadMore}> Load More </button>}
      </div>
    </>)

}

const sortByCategory = (postList, category) => {
  if (!category) return postList
  return postList?.filter((post) => post.details.category === category)
}
export default PostList