import React, {Component} from "react";
import "./CSS/landing.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Landing extends Component {
    render() {
        return (
            <div id='landingWrapper'>
                <div id='image'>
                    <img src="https://avatars2.githubusercontent.com/u/9615942?s=460&v=4"
                         alt='' id='me'/>
                </div>
                <div id='about'>
                    <h1>Software Developer</h1>
                    <h3>HTML • CSS • Javascript • React • Vue • Angular • Python • Java • C++</h3>
                    <h5>Currently a student at Texas Tech University, studying Computer Science and Mathematics. Avid
                        application developer and web developer,
                        with projects from sales optimization to online web games.
                        To learn more about me checkout my resume. If you want to view my projects click on the projects
                        tab.
                        Feel free to reach out on the contact page, I will get back as soo as possible. </h5>
                    <Container>
                        <Row id='icons'>
                            <Col><img width={100} height={100}
                                      src="https://img.icons8.com/windows/512/000000/github.png" alt=''/></Col>
                            <Col><img width={80} height={80} src="https://img.icons8.com/metro/208/000000/linkedin.png"
                                      alt=''/></Col>
                            <Col><img width={100} height={100}
                                      src="https://img.icons8.com/windows/512/000000/github.png" alt=''/></Col>
                            <Col><img width={80} height={80} src="https://img.icons8.com/metro/208/000000/linkedin.png"
                                      alt=''/></Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}

export default Landing;