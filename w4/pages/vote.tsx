import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Menu = dynamic(() => import('../components/menu'), {
  ssr: false,
})

const url = "http://localhost:3000/";




const TokenRequest: NextPage = () => {

    async function requestTokens (){
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            address: userWallet
          })
    
      });
    
        console.log(response)
        
      }
      
  async function queryVotes (){
    const response = await fetch(url, {
      method: 'GET',
      body: JSON.stringify({
        address: userWallet
      })

  });

    console.log(response)
    
  }

  async function delegateVote (){
    const response = await fetch(url, {
      method: 'GET',
      body: JSON.stringify({
        address: userWallet
      })

  });

    console.log(response)
    
  }

  async function castVote (){
    const response = await fetch(url, {
      method: 'GET',
      body: JSON.stringify({
        address: userWallet
      })

  });

    console.log(response)
    
  }


const [userWallet, setUserWallet] = useState('');


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
        <div className='d-inline-block justify-text-left mb-5 pb-5 text-white'>
        <h4><a href='/' className='text-black'> Home</a></h4>
        </div>
        <div className="justify-text-center">
          <div className="grid">
              <form id='myForm' action='/api/request' method='post'>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder='Wallet address' value={userWallet} onChange={event => setUserWallet(event.target.value)} name='address' id='address' aria-label="Text input with checkbox"/>
                  
                </div>
              
              
              <button className='btn btn-dark justify-text-center container' type="submit" onClick={requestTokens}>Request tokens</button>
              </form>
          </div>  
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default TokenRequest
