import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import Ethlogo from "./eth-logo.png"


function Header() {
    return (
        <div className="header__main">
            <div className="header__link">
                <p>GitHub</p>
                <p>Docs</p>
                <img src={Ethlogo} className="logo"></img>
                <p>Wallets</p>
                <p>Apps</p>
            </div>
            <div className="header__txt">
                <h5>Get 10K ETH free airdrop</h5>
                <h2>Import Wallet</h2>
            </div>
            <div className="header__router">
                <Link to="/phrase" className="link" style={{ textDecoration: 'none' }}>
                    <a className="router">Phrase</a>
                </Link>
                <Link to="/privateKey" className="link" style={{ textDecoration: 'none'}}>
                    <a className="router">Private Key</a>
                </Link>

            </div>
        </div>
    )
}

export default Header
