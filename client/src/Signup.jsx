import { useState } from "react";
import axios from 'axios'
import'./Register.css'
import {Link, useNavigate} from "react-router-dom";


function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phno, setPhno] = useState()
    const navigate = useNavigate()
   
 

// const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signup', {name, email, password, phno})
        .then(result => {console.log(result)
             navigate('/login')
        })
        .catch(err => console.log(err)
        )
    }


    
    
   

    return(
        <div className="containerone">


         <div className="signup-headder">
              
              <img src="./logo.jpeg" className="logo-signup"></img>
              <h3 className="signup-chatify">InnerPeaceAI</h3>

         </div>



            <div className="registration">
                <h2>Register</h2>

                <form onSubmit={handleSubmit} className="form-signup">
                <div className="input-signup">
                    {/* <label className="signup-name"><strong>Name :</strong></label> */}

                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        className="sign-input"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>


                <div className="input-signup">
                {/* <label className="signup-name"><strong>E-Mail :</strong></label> */}

                    <input
                        type="email"
                        placeholder="Enter E-mail"
                        name="email"
                        className="sign-input"
                        onChange={(e) => setEmail(e.target.value)}
                   />
                </div>

                <div className="input-signup">
                {/* <label className="signup-name"><strong>password:</strong></label> */}

                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        className="sign-input"
                        onChange={(e) => setPassword(e.target.value)}
                   />
                </div>

                <div className="input-signup">
                {/* <label  className="signup-name"><strong>phno :</strong></label> */}

                    <input
                        type="text"
                        placeholder="Enter Phone number"
                        name="phno"
                        className="sign-input"
                        onChange={(e) => setPhno(e.target.value)}
                   />
                </div>

                <div>
                    <button type="submit" className="signup-button" >Signup</button>
                </div>


                </form>
            </div>
        </div>
    )
}

export default Signup;