import React from 'react';
import logo2 from "../images/Rydeu 2.png"
const Footer = () => {
    return (
        <div style={{marginTop:"40px",height:"420px",background:"black"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",background:"black",color:"white"}}>
            <div style={{marginTop:"70px"}}>
                <img  src={logo2} alt="" />
                <p>Solution for all ground transfers</p>
                <p style={{fontFamily: 'Lato,sans-serif',marginTop:"50px",lineHeight:"14px"}}>Connect with us</p>
            </div>
            <div  style={{marginTop:"70px",fontFamily: 'Lato,sans-serif'}}>
                <p style={{color:"#EFEFEF",fontWeight:"700"}}>COMPANY</p>
                <p  style={{color:"#EFEFEF",marginTop:"30px"}}>About us </p>
                <p  style={{color:"#EFEFEF"}}>Privacy Policy </p>
               <p  style={{color:"#EFEFEF"}}>  Terms and conditions </p>
           <p> Imprint </p>
            <p> Careers / Jobs</p>
          <p> Sitemap</p>
            </div>
            <div style={{marginTop:"70px",fontFamily: 'Lato,sans-serif'}} >
                <p style={{fontWeight:"700"}}>HELP CENTER</p>
                 <p style={{marginTop:"30px"}}>Contact us </p>
                  <p> Customer FAQs</p> 
                  <p>Business FAQs</p>
                  <p>Supplier FAQs</p>
            </div>

        <div  style={{marginTop:"70px"}}>
            <p style={{fontWeight:"700"}}>OUR SERVICES</p>
                  <p style={{marginTop:"30px"}}> Airport Transfer</p> 
                  <p>Hourly Transfer</p>
                  <p>Business </p>
                   <p> Supplier</p>
        </div>
        </div>
        <hr style={{border: "0.1px solid #EFEFEF",height:"0px",width:""}} />
        <p style={{color:"#FFFFFF",marginBottom:"50px"}}> Copyright ©️ 2020 rydeu.com All rights reserved.</p>
        </div>
    );
};

export default Footer;