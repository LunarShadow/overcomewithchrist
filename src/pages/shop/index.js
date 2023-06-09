import Layout from '@/components/layout'
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
        <div className={'h-96 flex content-center items-center px-4'}>
          <h1 className={'text-center w-full'}> Shop Coming soon.</h1>
        </div>

        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></Script>
        <div hidden id="snipcart" data-api-key={`${process.env.NEXT_PUBLIC_SC_KEY}`}></div>
      </Layout>
  </>
  )
}

export default ShopHome