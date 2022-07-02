import React from 'react';
import napples from "../images/Naples (1).png"
import florence from "../images/Florance (1).png"

const Cities = () => {
    return (
        <div style={{marginTop:"90px"}}>
            <h2 style={{fontStyle:"Lato,sans-serif",textAlign:"left",marginLeft:"80px",color:"#484848"}}>Other cities</h2>
            <div style={{display:"flex",paddingLeft:"60px",marginLeft:"70px"}}>
                  <div style={{marginRight:"21px"}}>
                    <img src={napples} alt="" />
                  </div>
                  <div style={{marginRight:"21px"}}>
                  <img src={florence} alt="" />
                  </div>
                  <div style={{marginRight:"21px"}}>
                  <img src={napples} alt="" />
                  </div>
                  <div style={{marginRight:"21px"}}>
                  <img src={florence} alt="" />
                  </div>
                  </div>
                  
                  <div style={{display:"flex",paddingLeft:"60px",marginLeft:"70px",marginTop:"20px"}}>
                  <div style={{marginRight:"21px"}}>
                    <img src={napples} alt="" />
                  </div>
                  <div style={{marginRight:"21px"}}>
                  <img src={florence} alt="" />
                  </div>
                  <div style={{marginRight:"21px"}}>
                  <img src={napples} alt="" />
                  </div>
                  <div style={{marginRight:"21px"}}>
                  <img src={florence} alt="" />
                  </div>
                  </div>
            
        </div>
    );
};

export default Cities;