import React from "react"
import pic from './assets/me.jpg'
 
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
          Lots of stuff to say
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default About;