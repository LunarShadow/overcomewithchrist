import Link from 'next/link'
import Layout from '@/components/layout'

const NotFound = () => {
  return (
    <Layout pageTitle={''}>
      <div className={'w-full h-96 flex content-center items-center'}>
        <div className={'p-10 text-center'}>
          <p className={'text-4xl font-semibold'}>Four - oh - Four</p>
          <p> oops, not sure how you got here but this page doesn&apos;t exist.</p>
          <div className={'mt-5 w-full md:w-3/8 bg-primary rounded-2xl px-3 pt-1'}>
            <Link className={'text-white hover:text-black'} href={'/'}> Take me to greener pastures </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound