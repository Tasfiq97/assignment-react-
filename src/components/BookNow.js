import { Button, TextField } from '@mui/material';
import { fontWeight, height, lineHeight } from '@mui/system';
import React from 'react';
import bus from "../images/Group 471.png";
import book from "../images/group1.png";

const BookNow = () => {
    return (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            <div style={{display:"flex",marginLeft:"70px",marginTop:"-50px"}}>
               <div>
                <img src={bus} alt="" />
               </div>
               <div>
                <img src={book} alt="" />
               </div>
            </div>
            <div style={{width:"400px", height:"480px",marginLeft:"100px",border:"2px solid rgba(0, 0, 0, 0.19)",padding:"10px",borderRadius: "7px",marginBottom:"40px",marginTop:"-350px",background:"white"}}>
                <div  style={{backgroundColor:"#F4F4F4",padding:"10px"}}>
                <Button variant="contained" style={{background:"white",color:"#FF2D5C",paddingLeft:"30px",paddingRight:"30px"}}>One way</Button>
                <Button variant="text"  style={{paddingLeft:"30px",paddingRight:"30px",color:"black"}}>Road Trip</Button>
                <Button variant="text"  style={{paddingLeft:"30px",paddingRight:"30px" ,color:"black"}}>Hourly</Button>
                </div>

                <div style={{width:"400px"}}>
                    <form style={{}}>
                    <TextField  style={{width:"400px",paddingTop:"30px"}}  id="standard-basic" label="From(airport, hotel , address)" variant="standard" /> <br />  
                    <TextField style={{width:"400px",paddingTop:"30px"}}   id="standard-basic" label="to(airport, hotel , address)" variant="standard" />  
                    <TextField type="date" style={{width:"200px",paddingTop:"30px"}}   id="standard-basic" variant="standard" />  
                    <TextField type="datetime-local" style={{width:"200px",paddingTop:"30px",color:"#C1C1C1"}}   id="standard-basic" variant="standard" placeholder='pickup date' />  
                    <TextField type="email" style={{width:"400px",paddingTop:"30px",color:"#C1C1C1"}}   id="standard-basic" variant="standard" placeholder=' Email' />  
                    <TextField type="number" style={{width:"400px",paddingTop:"30px",color:"#C1C1C1"}}   id="standard-basic" variant="standard" placeholder=' Phone number' />  
                    
                    <Button variant="contained" style={{width:"400px",background:"#FF2D5C",marginTop:"10px"}}>Search</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;