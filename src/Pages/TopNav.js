import React from 'react';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Page.css';
import {Button} from 'react-bootstrap';



function TopNav(){
   
   
    return(
        <div>
            <div className="div1-topnav">
             
            </div>
            
            <div className="">
                <div className="div-logo">
                    <img src= {logo} alt="logoReact" className="img-logo" />
                </div>
                <div className="div2-topnav">
                    <Button variant="primary" className="button-compte" onClick={() => window.location.reload(false)}>
                    MON COMPTE</Button>
                </div>

            </div>
            
            
        </div>
      );
      }

export default TopNav;