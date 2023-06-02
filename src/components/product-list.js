import {useContext, useEffect, useMemo, useState} from 'react'
import {ProductListContext} from '@/context/product-list-context'
import Image from 'next/image'

const ProductList = ({ limit = 10, displayLoadMore = false, category = null }) => {
  const { products } = useContext(ProductListContext)
  const [showMore, setShowMore] = useState(displayLoadMore)
  const [index, setIndex] = useState(limit)
  const [list, setList] = useState([])

  // cache the sortList between re-renders
  const categoryList = useMemo(() => sortByCategory(products, category), [products, category])
  // // rerender the page each time categoryList, setList, or index changes
  useEffect(() => {
    setList(categoryList?.slice(0, index))
  }, [setList, categoryList, index])

  // add more items to the list of products based on the amount of items set.
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
    <div className={'my-10 mx-auto text-center p-10 '}>
      {!list && <h2>Products coming soon!</h2>}
      <ul>
        {list && list.map((product) => {
          return (
            <li key={product.slug} className={'bg-white rounded-lg drop-shadow-lg w-10/12 mx-auto my-8'}>
              <div className={'relative w-full aspect-square'}>
                <Image className={'rounded-lg'} src={product?.details.images[0]} alt={product?.details.title}
                       fill />
              </div>
                <div className={'grid grid-cols-4 content-center items-center'}>
                  <div className={'col-span-4 md:col-span-1 p-3'}>
                      <h3>{product?.details.title}</h3>
                  </div>
                  <div className={'col-span-4 md:col-span-1 p-3'}>
                      <p>${product?.details.price}</p>
                  </div>
                  <div className={'col-span-2 p-3 md:col-span-3 md:pt-1 md:px-3'}>
                    <select>
                      { product?.details?.variants.map((variant)=>{
                        return <option  key={variant.variantId}  value={variant.variantId}>{variant.color}/{variant.size}</option>
                      })}
                    </select>
                  </div>
                  <div className={'col-span-2 p-3 md:col-span-3 md:pt-1 md:px-3'}>
                    <input type={'submit'} value={'Add to cart'} className={'add-to-cart'} />
                  </div>
                </div>
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
const sortByCategory = (products, category) => {
  if (!category) return products
  return products?.filter((product) => product.details.category === category)
}
export default ProductList