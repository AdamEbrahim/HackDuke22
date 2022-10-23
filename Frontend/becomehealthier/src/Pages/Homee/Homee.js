import React from "react";
import { Link } from "react-router-dom";
import "./Homee.css";
import Typography from '@mui/material/Typography';
import Motivation from './Motivation'
import Box from '@mui/material/Box';
import Logo from './Image.jpeg';
import './index.css';
import gif from './ddf-mlg.gif'
import Adam from './Adam2.png'
import Leo from './Leo.png'
import VariableWidthGrid from './Grid'
import Nikhita from './TinyNikhita.png'



const Homee = () => {
    return ( 
    <div className="maya">
     <img src={Logo} alt="React Logo" />
     <img src={gif} alt="my-gif" />  
    <img src={Adam} alt="Adam" />
    <img src={Leo} alt="Leo" />
    <VariableWidthGrid/>
    <Motivation/>
    <img src={Nikhita} alt="Nikhita" />
    </div>

    );
  };
  
  export default Homee;