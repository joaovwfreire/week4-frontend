import Link from "next/link";
import { useState, useEffect } from 'react';
const ethers = require('ethers');
var window: any;
let provider: any;


export default function Menu() {
  
 

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">Week 4 Ballot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tokenrequest">Voting Tokens</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/vote">Vote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/walletgen">Wallet generator</a>
        </li>
        <li className="nav-item">
        
        </li>
        <li className="nav-item">
        
        
        </li>
      </ul>
      <span className="navbar-text">
        <Link href="https://github.com/protocolwhisper">
          ProtocolWhisper
        </Link> &
        <Link href="https://github.com/joaovwfreire">
        JoVi
        </Link>
      </span>
      </div>
      </div>
    </nav>
  );
}
