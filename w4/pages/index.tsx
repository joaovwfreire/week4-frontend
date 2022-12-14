import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Footer from '../components/footer'
import dynamic from 'next/dynamic'

const Menu = dynamic(() => import('../components/menu'), {
  ssr: false,
})

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"/>
      <Head>
        <title>Week 4 - Ballot</title>
        <meta name="description" content="Generated by create next app - a project made by ProtocolWhisper and JoVi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Menu></Menu>
        <h1 className={styles.title}>
          <div className='text-black'>Welcome to Week 4 Ballot!</div>
        </h1>

        <p className={styles.description}>
        Get started by clicking one of the following cards!
        </p>

        <div className={styles.grid}>
          <a href="/tokenrequest" className={styles.card}>
            <h2>Issue vote tokens &rarr;</h2>
            <p>Request our api  tokens to receive voting powers.</p>
          </a>

          <a href="/walletgen" className={styles.card}>
            <h2>New wallet &rarr;</h2>
            <p>Receive a public/private key-pair for a new wallet.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Vote &rarr;</h2>
            <p>Vote a proposal with the issued tokens.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Github</h2>
            <p>
              Have a look at the repo for this project.
            </p>
          </a>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default Home
