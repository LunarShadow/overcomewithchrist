import {useContext, useEffect, useMemo, useState} from 'react'
import {ProductListContext} from '@/context/product-list-context'
import Image from 'next/image'

const ProductList = ({limit = 10, displayLoadMore = false, category = null}) => {
  const {products} = useContext(ProductListContext)
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
    <div>
      {!list && <div className={'my-10 mx-auto text-center p-10 '}><h2>Products coming soon!</h2></div>}
      <div className={'flex flex-wrap mx-auto justify-evenly'}>
        {list && list.map((product) => {
          return (<div key={product.productId} className={'p-10 rounded-2xl drop-shadow-sm w-full md:w-1/2 lg:w-1/3 my-8'}>
            <div className={'relative w-full aspect-square'}>
              <Image className={'rounded-lg'} src={product?.details.images[0]} alt={product?.details.title}
                     fill />
            </div>
            <div className={'flex flex-col content-center items-center text-center'}>
              <p className={'font-semibold text-xl -mb-4'}>{product?.details.title}</p>
              <p>$ {product?.details.price}</p>
              <select name={product.productId}>
                {product?.details?.variants.map((variant) => {
                  return <option key={variant.variantId}
                                 value={variant.variantId}>{variant.color}/{variant.size}</option>
                })}
              </select>
              <button type={'submit'} className={'add-to-cart'}> Add to Cart</button>
            </div>
          </div>)
        })}
      </div>
      {showMore && <div
        className={'text-center text-white hover:text-black font-semibold px-2 py-1 mt-5 mb-8 bg-primary rounded-3xl w-48 mx-auto cursor-pointer'}>
        <span className={''} onClick={loadMore}> Load More </span>
      </div>}

    </div>
  </>)

}
const sortByCategory = (products, category) => {
  if (!category) return products
  return products?.filter((product) => product.details.category === category)
}
export default ProductList