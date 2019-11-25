import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'

import './components/CSS/App.css';
import Landing from "./components/landing";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Container from "react-bootstrap/Container";

class App extends Component{
    state={
        landing:true,
        resume: false,
        projects:false,
        contactMe:false
    };
  render(){
    return (
        <div id='pageWrapper'>
            <div id='contentWrapper'>
                   <Navbar id='nav' expand="lg" >
                        <Navbar.Brand onClick={()=>{
                            this.setState({resume:false,landing:true,projects:false,contactMe:false});
                        }} id='Brand' href="/">DALTON'S PORTFOLIO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href='' onClick={()=>{
                                    this.setState({resume:false,landing:true,projects:false,contactMe:false});
                                }}>Home
                                </Nav.Link>
                                <Nav.Link className='links' target="_blank" href="https://github.com/DaltonEsc">GitHub</Nav.Link>
                                <Nav.Link className='links' target="_blank" href="https://www.linkedin.com/in/dalton-e-b6368aa5/">LinkedIn</Nav.Link>
                                <Nav.Link href='' onClick={()=>{
                                    this.setState({resume:true,landing:false,projects:false,contactMe:false});
                                }}>Resume
                                </Nav.Link>
                                <Nav.Link onClick={()=>{
                                    this.setState({resume:false,landing:false,projects:true,contactMe:false});
                                }}>Projects
                                </Nav.Link>
                                <Nav.Link onClick={()=>{
                                    this.setState({resume:false,landing:false,projects:false,contactMe:true});
                                }}>Contact
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                <div id='componentWrapper'>
                    {this.state.landing ? <Landing className='component'/> :null}
                    {this.state.resume ? <Resume className='component'/> :null}
                    {this.state.projects ? <Projects className='component'/> :null}
                    {this.state.contactMe ? <Contact className='component'/> :null}
                </div>
                <div id = 'footer'>
                    <Navbar expand="lg" sticky="bottom" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="#">TODO - Build Footer</Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
  }
}
export default App;
