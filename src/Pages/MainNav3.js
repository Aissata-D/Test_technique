import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Page.css';
import ContextChoix from './ContextChoix';
import ContextNom from './ContextNom';



function MainNav3(){
   
    const contextValue = useContext( ContextNom)
    const contextValue1 = useContext( ContextChoix)
    
   
    
    return(
        <div>
            <div >

                <div className="MainApp">
                    Vous êtes : {' '}
                  
                  { contextValue1.choix } {' '}{' '}
                  { contextValue.theme1 } {' '} {' '}
                  { contextValue.theme2 } {' '} 
                  
                   
                    
                </div>
            </div>
            
        </div>
      );
      }

export default MainNav3;