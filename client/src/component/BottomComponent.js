import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

export function Bottom () {
    return(
        <Container fluid >
            <Row className="bottom">
            <Col id="bottom-left" ><h3 className="fade-in-text"  style={{textShadow:"2px 2px whitesmoke"}}>MPI Financial Plans</h3> <br/> <Button variant="outline-dark" href="https://www.mympi.com/mpi/9-mpi-financial-plans">MPI Plans</Button></Col>
            <Col id="bottom-center"><h3 className="fade-in-text" style={{textShadow:"2px 2px whitesmoke"}}>Compound Interest Course </h3><br/><Button variant="outline-dark" href="https://compoundinterest.com/main-page">MPI Course</Button></Col>
            <Col id="bottom-right"><h3 className="fade-in-text" style={{textShadow:"2px 2px grey"}}>MPI Calculator</h3> <br/><Button variant="outline-light" href="https://www.mympi.com/mpi/mpi-calculator">MPI Calculator</Button></Col>
            </Row>
        </Container>
    )
}