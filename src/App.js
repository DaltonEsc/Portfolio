import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import Main from "./components/main";
import './CSS/App.css';
class App extends Component{
  render(){
    return (
        <div id='pageWrapper'>
          <header>
            <Navbar id='nav' expand="lg" >
              <Navbar.Brand id='Brand' href="/">DALTON'S PORTFOLIO</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link className='links' href="https://github.com/DaltonEsc">GitHub</Nav.Link>
                  <Nav.Link className='links' href="https://www.linkedin.com/in/dalton-e-b6368aa5/">LinkedIn</Nav.Link>
                  <Nav.Link className='links' href="/resume">Resume</Nav.Link>
                  <Nav.Link className='links' href="/projects">Projects</Nav.Link>
                  <Nav.Link className='links' href="/contact">ContactMe</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <body>
          <Main/>
          </body>
        </div>
    );
  }
}
export default App;
