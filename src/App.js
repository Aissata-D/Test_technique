import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Pages/Page.css';

import Lien1 from './Pages/Lien1';
import Lien2 from './Pages/Lien2';
import Lien3 from './Pages/Lien3';
import Lien4 from './Pages/Lien4';


import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";





function App() {
  
   


  return (
    <div >
      
        

        <Router>
          <div>     

          <Switch>
          
          <Route exact path="/">

             <Page1 />

            </Route>
            

            <Route exact path="/Page2">
              <Page2 />
            </Route>
            
           
            <Route exact path="/Page3">
              <Page3 />
            </Route>

            <Route exact path="/Lien1">
              <Lien1 />
            </Route>

            <Route exact path="/Lien2">
              <Lien2 />
            </Route>

            <Route exact path="/Lien3">
              <Lien3 />
            </Route>

            <Route exact path="/Lien4">
              <Lien4 />
            </Route>
           
           
          </Switch>
          </div> 
      </Router>

    </div>
  );
}

export default App;
