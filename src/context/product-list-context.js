import {createContext, useEffect, useState} from 'react'

export const ProductListContext = createContext()

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState(null)

  // re-render the page only when setPostList changes
  useEffect(()=>{
    setProducts(getProducts())
  }, [setProducts])

  return (
    <ProductListContext.Provider value={{ products, setProducts }} >
      {children}
    </ProductListContext.Provider>
  )
}

const getProducts = () => {
  // get all the products and details from contents folder
  return ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    return keys.map((key, index) => {
      // removes the ./ and the .md part of the file name to create the slug
      // and return post data
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      return {
        details: value.attributes,
        slug,
      }
    })

  })(require.context('../content/products/', false, /^\..+\.md$/))
}