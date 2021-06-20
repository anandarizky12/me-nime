import React,{useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Recomended  from './components/Recomended/Recomended';
import TopRating  from './components/Top-Rating/Top-Rating';
import Home from './components/Home/Home'
import Upcoming from './components/Upcoming/Upcoming';
import MoreInfo from './components/MoreInfo/MoreInfo';
import SearchResult from './components/SearchResult/SearchResult';


function App() {

    return (
        <div>
            <Router>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path ="/">
                                {/* <Recomended/> */}
                                <Home/>
                        </Route>
                        <Route exact path ="/Recomended">
                                <Recomended/>
                        </Route>
                        <Route exact path ="/TopRating">
                                <TopRating/>
                        </Route>
                        <Route exact path ="/Upcoming">
                                <Upcoming/>
                        </Route>
                        <Route exact path ="/Details/:id" component={MoreInfo}/>
                        <Route exact path ="/Search/:name" component={SearchResult}/>

                    </Switch>
                </div>
               
            </Router>
        
         
        </div>
    )
}

export default App
