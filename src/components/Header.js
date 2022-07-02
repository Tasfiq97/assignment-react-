import { Button } from '@mui/material';
import React from 'react';
import logo from "../images/Layer 2.png"
import help from "../images/Group (1).png"
import flag from "../images/Group 432.png"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <div style={{display:"flex", justifyContent:"space-between",letterSpacing: "0.02em",boxShadow:"0px 1px 12px rgba(0, 0, 0, 0.16)"}}>
            <div style={{display:"flex ",justifyContent:"space-between",width:"50",}}>
                <div style={{paddingTop:"15px",marginTop:"20px",paddingBottom:"15px",paddingLeft:"60px",paddingRight:"80px"}}>
                    <img src={logo} alt="" />
                </div>
                <div style={{lineHeight:"",marginTop:"24px"}}> <p style={{color:"black",fontWeight:"700",fontSize:"14px"}}>Transfers</p></div>
                <div style={{marginLeft:"42px",lineHeight:"16px" ,marginTop:"26px"}}> <p style={{color:"black",fontWeight:"400",fontSize:"14px",}}>Bus hire</p></div>

            </div>
            <div style={{display:"flex ",justifyContent:"space-between",width:"50"}}>
                      <NavLink style={{textDecoration:"none",marginTop:"8px"}} to="/help">
                      <div style={{padding:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img style={{width:"20px",marginTop:"5px"}} src={help} alt="" />
                         <span style={{marginLeft:"10px"}}>Help</span>
                      </div>
                      </NavLink>
                     <div style={{fontSize:"14px",padding:"25px",marginTop:"15px"}}>
                 <img src={flag} alt="" />
                 <span style={{paddingLeft:"9px"}}>Deutch | EUR</span>
                     </div>
                     <div style={{textAlign:"center", borderRadius:"60px",width:"85px",marginRight:"60px",marginTop:"10px", display:"flex",justifyContent:"center",alignItems:"center"}} >
                     <FontAwesomeIcon style={{background:"#A0A0A0",width:"25px",color:"white",borderRadius:"100px"}} icon={faUser} />
                     <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </IconButton>
                     </div>
            </div>
           
        </div>
        </div>
    );
};

export default Header;