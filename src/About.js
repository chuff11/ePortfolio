import React from "react"
import pic from './assets/me.jpg'
import li from './assets/LI-In-Bug.png'
import gmail from './assets/gmail.png'
import './App.css';
 
function About(props) {
  return (
    <div>
      <div className="project-grid">
        <img src={pic} alt="A picture of me" className="Image"/>
        <div>
          <div className="page-title">
            <h1>About</h1>
          </div>
          <div className="left">
          Welcome to my ePortfolio!  My name is Cynthia, I'll be your host.  I am currently a student at BYU-Idaho working on a degree in Software Engineering.  I am a custodial lead with ambitions of software development greatness, so naturally I use my skills were ever I can to make things easier at work.  I use PowerApps, Power Automate and Power BI to try to cut down on paperwork and make things easier all around.
          <br /><br />
          I have worked for an escape room business in Provo UT, called Enkryption.  It was the best job ever!  Unfortunately, they went out of business about a year ago. I was very sad.  The best projects on this site are from working there.  But of course, no spoilers!
          <br /><br />
          If you happen to be in the market for an AR enthusiast, let's talk!
          <br /><br />
          <a href = "https://linkedin.com/in/cynthia-huffman/">
            <img src={li} alt = "Linked In" className="last" />
          </a>
          <a href = "mailto: cynthia.huffman7@gmail.com">
            <img src={gmail} alt = "Gmail" className="last" />
          </a>

          </div>
        </div>
      </div>
    </div>
  )
}
 
export default About;