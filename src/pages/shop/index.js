import Layout from '@/components/layout'
import ProductList from '@/components/product-list'
import {getProducts, ProductListProvider} from '@/context/product-list-context'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
const ShopHome = (products) => {

  return (<>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />
      </Head>

      <Layout pageTitle={'Shop'}>
        <div className={"flex flex-row justify-between content-center "}>
          <h1 className={'pageTitle'}>All Products</h1>
          <a href="#" className="snipcart-checkout block py-10 px-5 md:px-10"><Image alt={"cart"} width={25} height={25} src={"/img/shop/cart.png"} /></a>
        </div>
        <ProductList limit={10} products={products}/>
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></Script>
        <div hidden id="snipcart" data-api-key={`${process.env.NEXT_PUBLIC_SC_KEY}`}></div>
      </Layout>
  </>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return {
    props: { products, fallback: false }
  }
}

export default ShopHome