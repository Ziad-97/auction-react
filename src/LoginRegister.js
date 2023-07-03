import logo2 from "./imgs/logo-2.png";
import "./LoginRegister.css"
import logo from "./imgs/logo.png";
import React, {useEffect, useState} from "react";
import axios from "axios";
import async from "async";
import {Link} from "react-router-dom";



function LoginRegister() {

        const [loginData, setLoginData] = useState({
            userName: '',
            password: '',
        });

    const [regData, setRegData] = useState({
        userName: '',
        email:   '',
        password: '',
    });

        const handleSubmitLogin= async() => {
            try{
                const response = await axios.post('http://localhost:8085/user/login',
                    loginData);
                console.log(response.data);
            }catch (error){
                console.log("error found", error);
            }
        }

    const onChangeSubmitLog = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmitReg= async() => {
        try{
            const response = await axios.post('http://localhost:8085/user/register',
               regData);
            console.log(response.data);
        }catch (error){
            console.log("error found", error);
        }
    }; // doesn't wait for a response: async

    const onChangeSubmitReg = (e) => {
            setRegData({
                ...regData,
                [e.target.name]:e.target.value,
            });
    };











    return(
        <div>


            <div className="space">

            </div>

            <main>
                <div className="login-register-section">
                <div className="welcome-back-sect">
                    <div className="welcome-back">
                    Welcome <br/> Back!
                         <div>
                            <input name="userName" value={loginData.userName} type="text" onChange={onChangeSubmitLog} className="email-field" placeholder="Username"/>
                        </div>
                         <div>
                            <input name="password"  value={loginData.password} type="password" onChange={onChangeSubmitLog} className="password-field" placeholder="Password"/>
                        </div>
                        <div >
                            <button onClick={handleSubmitLogin} className="butt">Sign in</button>
                        </div>
                    </div>
                </div>

                <div className="create-account-sect">
                    <div className="create-account">
                        Create <br/> Account
                        <div>
                            <input name="userName"   value={regData.userName} onChange={onChangeSubmitReg} className="username" placeholder="Username"/>
                        </div>
                        <div>
                            <input name="email"  value={regData.email} onChange={onChangeSubmitReg} className="email-field" placeholder="Email"/>
                        </div>
                        <div>
                            <input name="password"  value={regData.password}  type="password" onChange={onChangeSubmitReg} className="password-field" placeholder="Password"/>
                        </div>
                        <div>
                            <button onClick={handleSubmitReg} className="butt">Sign Up</button>
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




    )
}

export default LoginRegister;