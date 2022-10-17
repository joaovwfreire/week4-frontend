import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import {useEffect} from 'react'



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  

  
  return (

<>
  <Head>

<meta name="viewport" content="width=device-width, initial-scale=1" />


</Head>
  


  <Component {...pageProps} />
  </>
  )
}

export default MyApp
