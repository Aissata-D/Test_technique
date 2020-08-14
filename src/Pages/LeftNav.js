import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Page.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';





function LeftNav(){
   
   
    return(
        <div>
            <div className="div1-leftnav">
           
               
              
                    <Button className="lien"><Link to="/Lien1">LIEN 1 INTERNE </Link> </Button><br />
             
                    <Button className="lien"> <Link to="/Lien2">LIEN 2 INTERNE </Link> </Button><br />
               
                    <Button className="lien"><Link to="/Lien3">LIEN 3 INTERNE </Link></Button> <br />
               
                    <Button className="lien"> <Link to="/Lien4">LIEN 4 INTERNE </Link> </Button><br />
                    <div className="div2-leftnav">

                        <Button className="lien"><Link to="/Lien1">LIEN 1 INTERNE </Link> </Button><br />
             
                        <Button className="lien"> <Link to="/Lien2">LIEN 2 INTERNE </Link> </Button><br />

                    </div>
                     
                
               
                
            </div>
            
            
        </div>
      );
      }

export default LeftNav;