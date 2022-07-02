import React from 'react';
import Wave from 'react-wavify';
import Header from '../components/Header';
import faq from "../images/Group (10).png";
import travel from "../images/Group (6).png";

const Help = () => {
    return (
        <div>
            <div>
                 <Header></Header>

            </div >
            <div style={{background:"linear-gradient(1.32deg, #DCF5F5 8.23%, rgba(220, 245, 245, 0.46) 96.04%)",height:"30vh",fontFamily: 'Montserratsans-serif'}}>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",paddingTop:"70px"}}>
                    <h2>Hello,How can we help you </h2>
                    <p>Find Travel guide, FAQ, chat,</p>
                </div>
            <Wave
             fill='rgba(220, 245, 245, 0.46)'
        paused={true}
        style={{marginTop:"30px",transform:"rotate(180deg)"}}
        options={{
          height: 0,
          amplitude: 80,
          speed: 0.15,
          points: 3
        }}
  />
                
            </div>
            <div style={{display:"flex",justifyContent:"space-around",background:"#FFFFFF"}}>
                <div style={{marginTop:"-10px"}}>
             <img src={faq} alt="" />
             <span> FAQ</span>
              <p> Lorem ipsum doolor sit amet</p>
                </div>
                <div style={{marginTop:"150px"}}>
             <img src={travel} alt="" />
             <span> Travel guide</span>
              <p> Lorem ipsum doolor sit amet</p>
                </div>
            </div>
        </div>
    );
};

export default Help;