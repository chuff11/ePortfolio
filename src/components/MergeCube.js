import React from "react"
import Thumbnails from "./MiniThumbnails.js"
import Enkryption from "../assets/enkryption.jpg"
 
function MergeCube(props) {
  return (
    <div className="project-grid">
      <Thumbnails />
      <div className="page-title">
        <h1>Merge Cube Puzzle</h1>
        <div className="MergeGrid1">
        <div className="Intro">
          <em>
          You enter a lab, the walls are painted orange and a variety of science toys strewn haphazardly around.  The clock is ticking and the final ingredients of a secret formula are hidden in this room.  Can you and your team solve all the puzzles and complete the antidote?
          </em>
          <br></br><br></br>
          <div className="emphasize">
            I built a custom Merge Cube app for Enkryption, formerly of Provo Utah.  This app was covered with puzzles that had to be solved to get the clues needed to complete the room and save the mad genius.
            </div>
        </div>
        <div className="WhatBox">
          <h3>What is a <a href="https://mergeedu.com/cube">Merge Cube</a>?</h3>
          It’s a toy.  It’s a 3” foam cube with unique markings on each side used to anchor AR elements.
        </div>
        <div className="MergeGrid2">
          <div className="Skills">
          <h3>Skills</h3>
            <ul>
              <li>Unity 3D</li>
              <li>C# - touch-based interaction system</li>
              <li>Vuforia SDK</li>
              <li>Merge Cube SDK</li>
              <li>3d Modeling – Hexagon</li>
              <li>3d Rigging and Animation - Blender</li>
            </ul>
          </div>
          <div className="Demo">
            <h3>Demo</h3>
            <iframe width="350" height="200" src="https://www.youtube.com/embed/wSWjBXD4Ui0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
 
export default MergeCube;