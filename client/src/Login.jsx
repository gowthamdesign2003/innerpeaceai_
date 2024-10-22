// import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
// import Cb from './Cb';


function Login() {
   
    return(
        
        
        <div className='body'>  
      
      <div className="fixed-icon">
          <Link to="/Cb">  <img src="./chatbot.png" alt="Fixed Icon" /></Link>
        </div>
           



        <div className="hero-bg">
    <nav className="navbar">
        <img src="./logo.jpeg" className="head-logo"/>
      <div className="logo">InnerPeaceAI</div>
      <ul className="nav-links">
        <li><a href="#">Employers</a></li>
        <li><a href="#">Clinicians</a></li>
        <li><a href="#">Mission</a></li>
        <li><a href="#">Help Center</a></li>
      </ul>
      <Link to="/Task"><button className="quiz-btn">Take our sleep quiz</button></Link>
    </nav>

    <div className="hero">
      <div className="hero-content">
        <h1>Learn how to sleep again</h1>
        <p>Sleep better with psychology. Start seeing results in 2 weeks.</p>
        <button className="continue-btn">Continue</button>
        <p className="clinician-referral">
          Are you a clinician? <a href="#">Refer a patient.</a>
        </p>
       
      </div>
    </div>
</div>
<br/>

{/************************** page2 ************************************************************************************/}

<section className="mission-section">
        <div className="mission-text">
            <h1>Built for insomniacs, by insomniacs</h1>
            <p>We were insomniacs, tired of waiting for solutions that came too late. Stellar Sleep was born from that frustration.</p>
            <p>We worked with sleep experts, converting our shared experiences into a digital solution, and spun out of Harvard in 2024 to make our solution available to the world.</p>
            <a href="#" className="mission-button">Learn about our mission</a>
        </div>
        <div className="partners">
                
            </div>

            <div className="threeD-man">
                <img src="./3d-man.jpeg"/>
            </div>
           
    </section>


    <section className="solution-section">
        <div className="diagram">
            <img src="./Group-6625.svg"/>
        </div>
        <div className="solution-text">
            <h1>Solve your sleep problems at the root</h1>
            <p>Insomnia is often a symptom of deeper challenges like anxiety, stress, or other things going on in your life. Thats why things like cutting coffee, and meditation are enough.</p>
                </div>
    </section>

    {/* page3 **********************************************************************************************************/}
    

    <div className="specialize">
    <div className="content">
        <h3>What we specialize in</h3>
        <p>Our program is deeply rooted in proven behavioral therapy for insomnia techniques.</p>
        <p>Weve distilled this rich clinical heritage into a convenient and accessible format, so you can harness the power of these techniques to experience sleep as it should be.</p>
    </div>
    <div className="techniques">
        <div className="technique">
            <div className="technique-icon">SRT</div>
            <p>Sleep restriction</p>
        </div>
        <div className="technique">
            <div className="technique-icon">Cognitive restructuring</div>
            <p>Cognitive restructuring</p>
        </div>
        <div className="technique">
            <div className="technique-icon">Paradoxical intentions</div>
            <p>Paradoxical intentions</p>
        </div>
        <div className="technique">
            <div className="technique-icon">Sleep anxiety</div>
            <p>Sleep anxiety</p>
        </div>
    </div>
</div>


{/*****************************************************Page5*****************************************************************/}
       

<div className="container">
    <img src="./men.jpeg" alt="Happy Man" className="image"></img>
    <div className="text-content">
        <h2>Why people love Stellar Sleep</h2>

        <div className="feature">
            <img src="./time.jpeg" alt="Fast Results Icon" className="feature-icon"></img>
            <div className="feature-text">
                <strong>Fast results</strong>, with clinically significant differences within 2 weeks
            </div>
        </div>

        <div className="feature">
            <img src="./10min.jpeg" alt="10 Minutes Icon" className="feature-icon"></img>
            <div className="feature-text">
                <strong>Fits any lifestyle</strong>, and takes just 10 minutes a day
            </div>
        </div>

        <div className="feature">
            <img src="./sleep.jpeg" alt="No Yo-Yo Icon" className="feature-icon"></img>
            <div className="feature-text">
                <strong>No more passing</strong> between good nights and bad nights
            </div>
        </div>

        <div className="feature">
            <img src="./puzzle.jpeg" alt="Root Solution Icon" className="feature-icon"></img>
            <div className="feature-text">
                <strong>Solves problems at the root</strong>, not just surface-level quick fixes
            </div>
        </div>
    </div>
</div>

{/******************fotter***************************************************************************************************/}


<footer>

    <div className="footer-container">
        <div className="footer-logo">
             <div className="footer-logo-edit">
            <img src="./logo.jpeg" className="logo-edit"></img>
            <h3 className="fotter-h3">InnerPeaceAI</h3>
        </div>

            <div className="footer-social">
                <a href="#"><img src="./fb.png" alt="LinkedIn"></img></a>
                <a href="#"><img src="./insta.png" alt="Instagram"></img></a>
            </div>
        </div>
        <div className="footer-section">
            <h3 className="h3color">PRODUCT</h3>
            <ul>

                <li><a href="#">Help Center</a></li>
               
            </ul>
        </div>
        <div className="footer-section">
            <h3 className="h3color">COMPANY</h3>
            <ul>
                <li><a href="#">For Clinicians</a></li>
                <li><a href="#">For Employers</a></li>
                <li><a href="#">Affiliates</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3 className="h3color">RESOURCES</h3>
            <ul>
                <li><a href="#">What is insomnia?</a></li>
                <li><a href="#">Insomnia test</a></li>
                <li><a href="#">CBT-I for insomnia</a></li>
            </ul>
        </div>
    </div>

    </footer>
</div>

//end
    )
}

export default Login;