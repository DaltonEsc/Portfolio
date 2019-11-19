import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';

import {Navbar, Nav} from 'react-bootstrap'

class App extends Component{
  render(){
    return (
        <body>
        <header>
          <Navbar id='nav' expand="lg" >
            <Navbar.Brand id='Brand' href="#home">Dalton's Resume</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className='links' href="#home">Home</Nav.Link>
                <Nav.Link className='links' href="#link">GitHub</Nav.Link>
                <Nav.Link className='links' href="#link">LinkedIn</Nav.Link>
                <Nav.Link className='links' href="#link">Resume</Nav.Link>
                <Nav.Link className='links' href="#link">about</Nav.Link>
                <Nav.Link className='links' href="#link">experience</Nav.Link>
                <Nav.Link className='links'  href="#link">projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        </body>

    );
  }
}
export default App;
