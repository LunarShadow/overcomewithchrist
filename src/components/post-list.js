import Link from 'next/link'
import {useContext, useEffect, useMemo, useState} from 'react'
import {PostListContext} from '@/context/post-list-context'
import Image from 'next/image'

const PostList = ({limit, displayLoadMore, category = null, skipFirst = false}) => {
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
        {list && list.map((post, index) => {
          // Don't show the latest post if skipFirst is true (for home page)
          if (skipFirst && index === 0) return
          return (
            <li key={post.slug} className={'bg-white rounded-lg drop-shadow-lg w-10/12 mx-auto my-8'}>
              <Link href={`/posts/${post.slug}`}>
                <div className={'grid grid-cols-4 content-center items-center'}>
                  <div className={'col-span-4 md:col-span-1 p-3'}>
                    <div className={'relative w-full h-36 md:h-24'}>
                      <Image className={'rounded-xl'} src={`/${post?.details.featuredImage}`} alt={post?.details.title}
                             fill />
                    </div>
                  </div>
                  <div className={'col-span-4 p-3 md:col-span-3 md:pt-1 md:px-3'}>
                    <span className={'block text-base font-light text-gray-500'}>{post.details.category}</span>
                    <span className={'block leading-6 text-xl text-black font-semibold py-2 md:py-4'}>{post.details.title}</span>
                    <span className={'block text-sm text-gray-400'}>{post.details.date}</span>
                  </div>
                </div>
              </Link>
           </li>)
        })}
      </ul>
        {showMore &&
          <div className={'text-center text-white hover:text-black font-semibold px-2 py-1 mt-5 mb-8 bg-primary rounded-3xl w-48 mx-auto cursor-pointer'}>
            <span className={''} onClick={loadMore}> Load More </span>
          </div>
        }

    </div>
  </>)

}

const sortByCategory = (postList, category) => {
  if (!category) return postList
  return postList?.filter((post) => post.details.category === category)
}
export default PostList