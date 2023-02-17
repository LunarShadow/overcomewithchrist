import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>OWC - HOME</title>
        <meta name="description" content="Overcome with christ is a christ-centric blog that teaches individuals how to live a successful life. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1> We will be back</h1>
        <p>Currently working on getting our act together. </p>
        <p>Our act is almost together.</p>
      </main>
    </>
  )
}
