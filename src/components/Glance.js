import React from 'react';

const Glance = () => {
    return (
        <div style={{marginTop:"100px"}}>
          <div>
            <span style={{marginRight:"20px",fontSize:"12px",color:"grey",marginLeft:"85px"}}>Home</span>
            <span style={{marginRight:"20px",fontSize:"12px",color:"grey"}}>Cities</span>
            <span style={{marginRight:"20px",fontSize:"12px",color:"black",}}>Rome</span>
             </div>
             <div style={{paddingLeft:"83px"}}>
             <ul style={{listStyleType:"circle",marginLeft:"30px",fontSize:"20px",fontWeight:"700",lineHeight:"24px",color:"#FF8924"}}>
                  {/* <span>At a Glance</span> */}
      <li><span>At a glance</span></li>
    </ul>
       <ul>
        <li style={{fontWeight:"400",color:"grey",lineHeight:"20px",paddingTop:"10px",paddingBottom:"30px"}}> Transportation in Rome</li>
        <li style={{fontWeight:"400",color:"grey",lineHeight:"20px",paddingTop:"10px",paddingBottom:"30px"}}>Airport Transfers in Rome</li>
        <li style={{fontWeight:"400", fontSize:"15px",color:"grey",paddingTop:"10px",paddingBottom:"30px"}}>Sightseeing Transportation</li>
       </ul>
             </div>
        </div>
    );
};

export default Glance;