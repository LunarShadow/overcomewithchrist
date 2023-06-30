import Layout from '@/components/layout'
import ProductList from '@/components/product-list'
import {getProducts} from '@/context/product-list-context'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
const ShopHome = (products) => {
  return (<>
      <Layout pageTitle={'Shop'}>
        <div className={'h-96 flex content-center items-center px-4'}>
          <h1 className={'text-center w-full'}> Shop Coming soon.</h1>
        </div>
      </Layout>
  </>
  )
}



export default ShopHome
