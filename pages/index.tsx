import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Header></Header>
    </div>
  )
}

export default Home
