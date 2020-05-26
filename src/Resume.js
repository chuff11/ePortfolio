import React from "react"
 
function Articles(props) {
  return (
    <div>
      <div className="page-title">
      <h1>Résumé</h1>
      </div>
      <div className="resume">
        <h2>EDUCATION</h2>
        <div className="grid">
          <span className="left">Brigham Young University – Idaho</span>
          <span className="right">06/2033</span>
          <span className="left"><strong>Bachelor of Science, Software Engineering</strong></span>
          <span className="right">Rexburg, ID</span>
          <ul className="left" className="wide">
            <li>GPA – 4.0</li>
            <li>Data Structures, coursework in C++</li>
          </ul>
          <span className="left">Brigham Young University – Idaho</span>
          <span className="right">06/23/2019</span>
          <span className="left"><strong>Certificate in Programming - Computer Science</strong></span>
          <span className="right">Rexburg, ID</span>
        </div>
        <h2>SKILLS</h2>
        <div>
        <div className="flex" >
          <div>
          <h3>Advanced:</h3>
          <ul>
            <li>PowerApps</li>
            <li>Microsoft Office</li>
          </ul>
          </div>
          <div>
          <h3>Compentent:</h3>
          <ul>
            <li>Power Automate</li>
            <li>Unity 3d</li>
          </ul>
          </div>
        </div>
        </div>
        <h2>EXPERIENCE</h2>
          <div className="grid">
              <span className="left">The Church of Jesus Christ of Latter-Day Saints</span>	
              <span className="right">04/2019 – Present</span>
              <span className="left"><strong>Custodial Lead</strong></span>
              <span className="right">Salt Lake City, UT</span>
              <ul className="wide">
                <li>Streamlined processes and eliminated extra paperwork throughout the department by making apps and flows with PowerApps and Power Automate</li>
                <li>Lead a team of 10 members to keep BYU Salt Lake Center at a set cleanliness standard</li>
                <li>Conducted individual and team trainings on safety, processes, and proper use of machinery with no OSHA-reportable incidences in the last year</li>
                <li>Strategize priorities to maintain the standard with teams down to half staffing capacity for weeks at a time</li>
              </ul>
              <span className="left">Enkryption</span>	
              <span className="right">03/2018 – 02/2019</span>
              <span className="left"><strong>Software Developer</strong></span>	
              <span className="right">Provo, UT</span>
              <ul className="wide">
                <li>Built two augmented reality apps using Unity 3D with Merge Cube, Vuforia and EasyAR SDKs to integrate real-world and digital elements to add puzzles in an escape room</li>
                <li>Designed a Windows app in Unity 3D to build suspense and finalize the solution in an escape room</li>
                <li>Provided support and updates for apps as needed for changing demands and hardware</li>
              </ul>
      
              <span className="left">The Church of Jesus Christ of Latter-Day Saints</span>	
              <span className="right">05/2014 – 04/2019</span>
              <span className="left"><strong>Custodian</strong></span>	
              <span className="right">Salt Lake City, UT</span>
              <ul className="wide">
                <li>Led groups of up to 25 volunteers to clean large areas within a limited time frame</li>
                <li>Cross-trained in a variety of assignments to fill for low-staffing on the team</li>
                <li>Conducted group and individual training on high-speed burnishers and auto-scrubbers to improve team flexibility</li>
              </ul>
          </div>
      </div>
    </div>
  )
}
 
export default Articles;