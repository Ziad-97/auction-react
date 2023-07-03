import React, {useEffect, useState} from "react";
import logo2 from "./imgs/logo-2.png";
import "./AuctionList.css";
import logo from "./imgs/logo.png";
import async from "async";
import axios from "axios";


function AuctionList() {

    const [auctionData, setAuctionData] = useState({

    });

    useEffect(() => {
        handleAuctionList();
    }, []);

const handleAuctionList = async () => {
    try{
        const response = await axios.get("http://localhost:8085/auction/showauctions")
        console.log(response.data);
        setAuctionData(response.data)
        console.log(auctionData);
    } catch (error){
        console.log("error found", error);
    }
}







    return(
        <div>


            <div className="space">

            </div>

            <main>
                <div className="container-and-sidebar">

            <div className="sidebar">
            <p id="account-det">Account details</p>
                <p id="funds">Funds:</p>
                <p id="owned-items">Owned Items:</p>
                <p id="active-buttons">Active Auctions</p>
                <button id="butt-side">Add Funds</button>
            </div>
            <div className="content">
            <div className="container">

                <div className="container-det">
                <p>Live Bid</p>
                    <p id="name">Item</p>

                <div className="cont-pic">

                </div>
                <div className="cont-cont-txt">
                    <p id ="price">Original Price</p>
                    <p id = "bidPrice">Current bid</p>
                </div>
                </div>
                <div className="button-cont">
                    <button id="plus">
                        +
                    </button>
                    <button id="minus">
                        -
                    </button>

                </div>
            </div>

                <div className="container">

                    <div className="container-det">
                        <p>Live Bid</p>

                        <div className="cont-pic">

                        </div>
                        <div className="cont-cont-txt">
                            <p>Original Price</p>
                            <p>Current bid</p>
                        </div>
                    </div>
                    <div className="button-cont">
                        <button id="plus">
                            +
                        </button>
                        <button id="minus">
                            -
                        </button>

                    </div>
                </div>

                <div className="container">

                    <div className="container-det">
                        <p>Live Bid</p>

                        <div className="cont-pic">

                        </div>
                        <div className="cont-cont-txt">
                            <p>Original Price</p>
                            <p>Current bid</p>
                        </div>
                    </div>
                    <div className="button-cont">
                        <button id="plus">
                            +
                        </button>
                        <button id="minus">
                            -
                        </button>

                    </div>
                </div>
                <div className="container">

                    <div className="container-det">
                        <p>Live Bid</p>

                        <div className="cont-pic">

                        </div>
                        <div className="cont-cont-txt">
                            <p>Original Price</p>
                            <p>Current bid</p>
                        </div>
                    </div>
                    <div className="button-cont">
                        <button id="plus">
                            +
                        </button>
                        <button id="minus">
                            -
                        </button>

                    </div>
                </div>



                </div>
                </div>


            </main>

            <footer>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <div>Auction Off</div>
                </div>
                <div className="links">
                    <div className="subtitle">Links</div>
                    <div className="subtitle">Resources</div>
                    <div className="subtitle">Legal</div>

                    <div className="sublink">Feedback</div>
                    <div className="sublink">Features</div>
                    <div className="sublink">Terms of Use</div>

                    <div className="sublink">Privace Policy</div>
                    <div className="sublink">Login</div>
                    <div className="sublink">Privace Policy</div>

                    <div className="sublink">Legal Notice</div>
                    <div className="sublink">Signup</div>
                    <div className="sublink">Legal Notice</div>
                </div>
            </footer>





        </div>

            );
}

export default AuctionList