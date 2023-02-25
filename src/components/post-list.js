import Link from 'next/link'
import {useContext, useEffect, useState} from 'react'
import {PostListContext} from '@/context/post-list-context'

const PostList = ({ limit, displayLoadMore }) => {
  const { postList } = useContext(PostListContext)
  const [showMore, setShowMore] = useState(displayLoadMore)
  const [index, setIndex] = useState(limit)
  const [list, setList] = useState([])

  // rerender the page each time postList, setList, or index changes
  useEffect(()=>{
    setList(postList?.slice(0,index))
  },[postList, setList, index])

  // add more items to the list of post based on the amount of items set.
  // concats the next sets of items to the original array then updates the state
  // of index, list, and showMore
  const loadMore = () =>{
    const newIndex = index + limit;
    const newShowMore = newIndex < (postList?.length - 1);
    const newList = list.concat(postList?.slice(index, newIndex));
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

export default  PostList