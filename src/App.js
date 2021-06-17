import React,{useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Recomended  from './components/Recomended/Recomended';



function App() {

    return (
        <div>
            <Router>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact="/">
                                <Recomended/>
                        </Route>
                        <Route exact="/Recomended">
                                <Recomended/>
                        </Route>

                    </Switch>
                </div>
               
            </Router>
        
         
        </div>
    )
}

export default App
