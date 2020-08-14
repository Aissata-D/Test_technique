import React, {useEffect, useState} from 'react';
import './Page.css';
import ContextNom from './ContextNom';
import { Button } from 'react-bootstrap';

import MonRadio from './MonRadio';


function MonChamp() { 
 
  
  
  
const [Non, setNon] = useState(true); 

const Text = () =>{
  setNon(!Non)

}

    const [name, setName] = useState('nom'); 
  
    function handleChangeName(e) { 
      setName(e.target.value); 
    }
  
    useEffect(() => { 
      document.title = `MonChamp ${name}`; 
    }); 


    const [Prenom, setPrenom] = useState('Prenom'); 
    
  
    function handleChangePrenom(e) { 
     setPrenom(e.target.value) ; 
      
      
    }
  
    useEffect(() => { 
      document.title = `MonChamp ${Prenom}`; 
      
    }); 
   
    
    const contexValue = {
      theme1: name,
      theme2: Prenom,
     
    }
   
    
    
if (Non){
  
      return (

        <div>
          
            <div className="MainApp">
            
                <div className="Question">
                        Peux-tu m'indiquer ton nom et prenom ?   
                </div>
                
                <div className='DivNom'>
                  <input type="text"  placeholder="Nom" onChange={handleChangeName}/>
                </div>
                <div className='DivNom'>
                  <input type="text" placeholder="Prenom" onChange={handleChangePrenom}/>
                </div>
              
                <Button className="Button" onClick={Text}>SUIVANT</Button>
            
            
            </div>
        </div>
        )


      }
   
     else{
      return(
        <div> 
          <ContextNom.Provider value={contexValue}>
             <MonRadio />
          </ContextNom.Provider>
        </div>
       
      );
      }
    
     
}

  export default MonChamp;


 