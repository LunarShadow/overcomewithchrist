import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SubscriptionBox from '@/components/subscription-box'
import Link from 'next/link'

export default function Layout({children, pageTitle}) {
  return (<div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <section>
        <Header />
        <div className={'block w-full bg-primary py-2'}>
          <p className={'cursor-pointer text-center text-xl underline font-light'}><Link className={'text-white'} href={'#subscribe'}>Subscribe to Newsletter </Link></p>
        </div>
        <div className="content">{children}</div>
        <SubscriptionBox />
        <Footer />
      </section>
    </div>)
}