import React from 'react';
import book1 from "../images/Group (3).png";
import book2 from "../images/Group (4).png";
import book3 from "../images/Group 677.png"
import book4 from "../images/Group 678.png"

const Bookings = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-around",background:"#EFEFEF"}}>
         <div style={{padding:"40px"}}> 
            <img src={book4} alt="" />
            <p>Book & pay later</p>
         </div>
         <div style={{padding:"40px"}}> 
         <img src={book1} alt="" />
           <p> Flexible trip amendments</p> 
           </div>
         <div style={{padding:"40px"}}>
         <img src={book2} alt="" />
            <p>Free cancelation</p>
            </div>
         <div style={{padding:"40px"}}>
         <img src={book2} alt="" />
            <p>24/7 in person support</p>
            </div>
        </div>
    );
};

export default Bookings;