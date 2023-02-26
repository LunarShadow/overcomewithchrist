import Link from 'next/link'
import {useContext, useEffect, useMemo, useState} from 'react'
import {PostListContext} from '@/context/post-list-context'

const PostList = ({ limit, displayLoadMore, category = null }) => {
  const { postList } = useContext(PostListContext)
  const [showMore, setShowMore] = useState(displayLoadMore)
  const [index, setIndex] = useState(limit)
  const [list, setList] = useState([])

  // cache the sortList between re-renders
  const categoryList = useMemo(
    () => sortByCategory(postList, category),
    [postList, category]
  )
  // rerender the page each time categoryList, setList, or index changes
  useEffect(()=>{
    setList(categoryList?.slice(0,index))
  },[setList, categoryList, index])


  // add more items to the list of post based on the amount of items set.
  // concats the next sets of items to the original array then updates the state
  // of index, list, and showMore
  const loadMore = () =>{
    const newIndex = index + limit;
    const newShowMore = newIndex < (categoryList?.length - 1);
    const newList = list.concat(categoryList?.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }

  return(
    <>
      <div>
        {!list && <div>No posts!</div>}
        <ul>
          {list &&
            list.map((post) => {
              return (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`}>
                    {post.details.title} | {post.details.date}
                  </Link>
                </li>
              )
            })}
        </ul>
        {showMore && <button onClick={loadMore}> Load More </button>}
      </div>
    </>
  )

}

const sortByCategory = (postList, category)=>{
  if (!category) return postList
  return postList?.filter((post)=> post.details.category === category )
}
export default  PostList