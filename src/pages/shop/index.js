import Layout from '@/components/layout'
import ProductList from '@/components/product-list'
import {ProductListProvider} from '@/context/product-list-context'
import Head from 'next/head'
import Script from 'next/script'
const ShopHome = () => {

  return (<>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />
      </Head>

      <Layout pageTitle={'Shop'}>
        <h1 className={'pageTitle'}>All Products</h1>
        <a href="#" className="snipcart-checkout">Click here to checkout</a>
        <ProductListProvider>
          <ProductList limit={10} />
        </ProductListProvider>
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></Script>
        <div hidden id="snipcart" data-api-key={`${process.env.NEXT_PUBLIC_SC_KEY}`}></div>
      </Layout>
  </>
  )
}

export default ShopHome