import React from 'react'
import "./Header.css"
import {NavLink} from "react-router-dom"
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
                <NavLink to="/phrase" className="link" activeStyle={{ textDecoration: 'none', backgroundColor: "blue", color: "white", borderRadius: "20px" }}>
                    <a className="router">Phrase</a>
                </NavLink>
                <NavLink to="/privateKey" className="link" activeStyle={{ textDecoration: 'none', backgroundColor: "blue", color: "white", borderRadius: "20px"}}>
                    <a className="router">Private Key</a>
                </NavLink>

            </div>
        </div>
    )
}

export default Header
