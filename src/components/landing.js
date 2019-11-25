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
                    <img width={300} height={300} src="https://avatars2.githubusercontent.com/u/9615942?s=460&v=4"
                         alt=''/>
                </div>
                <div id='about'>
                    <h1>Software Developer</h1>

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