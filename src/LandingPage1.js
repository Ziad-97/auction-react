import React from 'react'

import "./LandingPage1.css";
import * as PropTypes from "prop-types";

import logo2 from "./imgs/logo-2.png";
import logo from "./imgs/logo.png";
import setbid from "./imgs/setbid.png";
import transferfunds from "./imgs/transferfunds.png";
import accountdetails from "./imgs/accountdetails.png";
import imgbanner1 from "./imgs/banner-1.jpg"
import imgbanner2 from "./imgs/banner-2.png"

import artistic from "./imgs/artistic.png";
import map from "./imgs/map.png";
import flower from "./imgs/flower.png";

function Button(props) {
    return null;
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
};

function LandingPage1() {
    return (
     <div>


         <main>
            <div className="part1">
                <div className="img-banner-1">
                    <img id = "ban-1" src={imgbanner1} alt="banner-1"/>
                </div>
                <div className="title1">
                     <p id = "title-head"> Get Started with
                    your auction
                    experience right
                         now!</p>
                    <p id="title-head-content">
                        Explore a wide range of products up for bidding and discover unique items at incredible deals.<br/>
                    Join the auction community and immerse yourself in the thrill of competitive bidding. <br/>
                    Our secure auction platform ensures a safe and trustworthy environment for buyers and sellers alike.
                    Stay updated<br/> with real-time bidding notifications and connect with fellow auction enthusiasts. Whether you're searching for <br/>collectibles,
                    rare finds, or everyday items, our user-friendly interface makes it easy to find and bid on the treasures<br/> you desire. Don't miss out on the excitement
                    – start your auction journey today and unlock new opportunities to buy<br/>
                    and sell!"

                    Feel free to modify or personalize the paragraph according to your specific auction platform and target<br/>
                        audience.</p>

                </div>
                <div className="email-section">
                    <input placeholder="Enter Your Email" />
                    <button>Get Started</button>
                </div>
            </div>

             <div className="part2">
                 <div className="title2">
                     What We Do:
                 </div>
                 <div className="we-do-cont1">
                    <div className="container">
                        <div className="row1">
                            <img src={setbid} alt="SetBids" />
                            <div className="title3">
                                Set Bids!
                            </div>
                        </div>
                        <div className="row2">
                            Set Bids!

                            Enter an auction from the list of available auctions and participate by setting your desired bid. Engage in the thrilling world of auctions as you compete for your desired items. With just a few clicks, you can enter the exhilarating bidding process and potentially secure exclusive deals. Immerse yourself in the excitement as you strategically place your bids and monitor the progress of the auction. Choose from a diverse range of auctions, each offering unique items and opportunities. Don't miss your chance to win – join the auction and set your bids now!                        </div>
                    </div>
                     <div className="container">
                         <div className="row1">
                             <img src={transferfunds} alt="SetBids" />
                             <div className="title3">
                                 Transfer<br/>Funds
                             </div>
                         </div>
                         <div className="row2">
                             After successfully signing up, gain full control over your finances by effortlessly adding funds to your virtual wallet. Our intuitive and user-friendly interface features a convenient sidebar on the left, allowing you to seamlessly manage your financial transactions. Simply navigate to the designated section, where you can securely deposit funds into your virtual wallet. Rest assured, our platform ensures a worry-free experience, prioritizing the safety and security of your financial information. Take charge of your account and conveniently add funds whenever needed, empowering you to participate in auctions and make purchases with ease.                         </div>
                     </div>

                     <div className="container">
                         <div className="row1">
                             <img src={accountdetails} alt="SetBid" />
                             <div className="title3">
                                 Account<br/>Details
                             </div>
                         </div>
                         <div className="row2">
                             Access comprehensive information about your account with ease. Gain insights into your current funds, enabling you to monitor your available balance effortlessly. Stay informed about auctions you are currently registered for, ensuring you never miss out on exciting bidding opportunities. Our platform provides a user-friendly interface where you can conveniently view and manage all the vital details related to your account. Stay updated on your financial status and track your participation in ongoing auctions, empowering you to make informed decisions throughout your auction experience.                         </div>
                     </div>

                 </div>
             </div>
             <div className="part3">
                 <div className="title2">
                     How Are We Different?
                 </div>

                 <div className="we-diff-cont1">
                     <div className="row1">
                         Bidding Operations Made Easy
                     </div>
                     <div className="row2">
                         Our Auctions are safe, offering a wide variety of items, ranging from exquisite works of art to valuable material possessions. With a commitment to security and integrity, we prioritize creating a trusted environment for both buyers and sellers. Explore our diverse collection, where you'll find an array of captivating artwork, rare collectibles, high-end jewelry, vintage furniture, and much more. Whether you're a seasoned collector or simply looking for unique treasures, we've got it all. Bid with confidence and embark on an exciting journey of discovery as you browse through our carefully curated selection.                     </div>
                 </div>

             </div>
             <div className="part4">
                 <div className="title2">
                     Join Hunderds<br/>Auctioneers Wolrd wide<br/>In This Digital Haven.
                 </div>
                 <div className="join-cont1">
                     <img src={artistic} alt="artistic" />
                     <img src={map} alt="map" />
                     <img src={flower} alt="flower" />
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
    )
}

export default LandingPage1
