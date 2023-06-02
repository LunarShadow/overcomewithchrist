import Layout from '@/components/layout'
import FeaturedShopImage from '@/components/featured-shop-image'
import ProductList from '@/components/product-list'
import {ProductListProvider} from '@/context/product-list-context'

const ShopHome = () => {
  return (
    <Layout pageTitle={'Shop'}>
      <h1 className={'pageTitle'}>All Products</h1>
      <ProductListProvider>
        <ProductList limit={10} />
      </ProductListProvider>
    </Layout>
  )
}

export default ShopHome