import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Page.css';
import MainNav3 from './MainNav3';
import ContextChoix from './ContextChoix';





const MonRadio = () =>{

  

  const [Non, setNon] = useState(true); 

  const Text = () =>{
    setNon(!Non)
  
  }

  const [Sexe, setSexe] = useState("Monsieur"); 

  const Monsieur = () =>{
    setSexe(Sexe=>"Monsieur"); 
    console.log(Sexe);
  }

  const Madame = () =>{
    setSexe(Sexe => "Madame"); 
    console.log(Sexe);
    
  }
  const contexValue1 = {
    
    choix: Sexe
  }
  
   

    if (Non){
    return(
    <div className="MainApp">
     
   
            <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="Question">Pouvez-vous indiquer votre sexe ?</div>

                <div className="DivNom">
                  <Button className="monsieur" onClick={Monsieur}>Monsieur</Button> 
                </div>
                <div className="DivNom">                                
                    <Button className="madame" onClick={Madame}>Madame</Button>   
                </div>
            </div>


          </div>
            
        </div>

        <Button className="Button" onClick={Text}>SUIVANT</Button>
    </div>
    );
    }
    else{
      return(
        <div>
          <ContextChoix.Provider value={contexValue1}>
             <MainNav3 />
           </ContextChoix.Provider> 
        </div>
        

      );
    }
}




export default MonRadio;