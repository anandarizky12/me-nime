import React,{useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Recomended  from './components/Recomended/Recomended';
import TopRating  from './components/Top-Rating/Top-Rating';



function App() {

    return (
        <div>
            <Router>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path ="/">
                                {/* <Recomended/> */}
                                <p>hello</p>
                        </Route>
                        <Route exact path ="/Recomended">
                                <Recomended/>
                        </Route>
                        <Route exact path ="/TopRating">
                                <TopRating/>
                        </Route>

                    </Switch>
                </div>
               
            </Router>
        
         
        </div>
    )
}

export default App
