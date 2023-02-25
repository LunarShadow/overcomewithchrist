import {createContext, useEffect, useState} from 'react'
import matter from 'gray-matter'

export const PostListContext = createContext()

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState(null)

  // re-render the page only when setPostList changes
  useEffect(()=>{
    setPostList(getPostList())
  }, [setPostList])

  return (
    <PostListContext.Provider value={{ postList, setPostList }} >
      {children}
    </PostListContext.Provider>
  )
}

const getPostList = () => {
  // get all the post content  and details from contents folder
  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    return keys.map((key, index) => {
      // removes the ./ and the .md part of the file name to create the slug
      // and return post data
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        details: document.data,
        content: document.content,
        slug,
      }
    })

  })(require.context('../content/posts/', false, /^\..+\.md$/))

  // sort the posts by date, so the latest post is first and return sorted array
  return posts.sort((a, b) => {
    const dateA = new Date(a.details.date)
    const dateB = new Date(b.details.date)
    return dateA < dateB ? 1 : -1
  })
}