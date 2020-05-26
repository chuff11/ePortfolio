import React, { Component } from "react";
import './App.css';
import Thumbnails from './components/Thumbnails.js'
import MergeCube from './components/MergeCube.js'
import {
  Switch,
  Route
} from "react-router-dom";




function Projects(props) {
  return (
    <div className="page-title">
      <h1>Projects</h1>

      <Thumbnails />
          
    </div>
  )
}

export default Projects;