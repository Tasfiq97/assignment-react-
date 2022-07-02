import { padding } from '@mui/system';
import React from 'react';
import bg from "../images/Dusseldolf_cover 1.png"
const Banner = () => {
    return (
        <div style={{
            backgroundImage:`linear-gradient(180deg, rgba( 0, 0, 0,0.38) 50%, rgba(0,0,0,0.38) 50%),url("${bg}")`,backgroundRepeat:"no-repeat",backgroundSize:"100%", height:"60vh"
          }} >
           <h1 style={{fontSize:"36px",textAlign:"left", paddingLeft:"40px",paddingTop:"50px", margin:"0px",color:"white"}}>Private Transfer & Taxi services </h1>
           <h1 style={{fontSize:"36px",textAlign:"left", paddingLeft:"50px",margin:"0px",color:"white"}}>in Geneva</h1>
          <p style={{textAlign:"left", color:"white",fontSize:"24px",paddingLeft:"40px",fontWeight:"500"}}>Book airport transfers, city transfers and hourly</p>
          <p  style={{textAlign:"left", color:"white",fontSize:"24px",paddingLeft:"40px",fontWeight:"500"}}>disposal services with driver</p>
        </div>
    );
};

export default Banner;