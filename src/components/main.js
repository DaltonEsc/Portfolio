import React from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Landing from "./landing";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main =()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component ={Landing}/>
            <Route exact path ="/contact" component ={Contact}/>
            <Route exact path ="/projects" component ={Projects}/>
            <Route exact path ="/resume" component ={Resume}/>
        </Switch>
    </BrowserRouter>

);

export default Main;