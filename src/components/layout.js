import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SubscriptionBox from '@/components/subscription-box'

export default function Layout({children, pageTitle}) {
  return (<>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header />
        <div className={'block w-full bg-primary text-white underline text-center text-xl py-2 font-light'}>
          <p><a className={'cursor-pointer'}>Subscribe to Newsletter</a></p>
        </div>
        <div className="content">{children}</div>
        <SubscriptionBox />
        <Footer />
      </section>
    </>)
}