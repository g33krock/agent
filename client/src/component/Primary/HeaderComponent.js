import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { agentService } from "../../services/AgentService";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faQuestion,
  faNewspaper,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { Col, Image, Row } from "react-bootstrap";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: null,
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(agent);
    console.log(ID);
  }

  render() {
    return (
      <div className="sticky">
        <Navbar
          style={{ backgroundColor: "black", marginLeft:"auto", marginRight:"auto", alignItems:"center" }}
        >
          {/* <Col>
          <Navbar.Brand>
            <FontAwesomeIcon icon={faCoins} style={{ color: "white" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col> */}
          <Row style={{alignItems:"center"}}>
          {this.state.agent &&
          this.state.agent.map((ag) => (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Col>
              <Nav.Link style={{ color: "white" }} href="https://compoundinterest.com/main-page/">
                <FontAwesomeIcon
                  icon={faVideo}
                  style={{ color: "white" }}
                />{" "}
                Compound Interest Video Series
              </Nav.Link>
              </Col>
              <Col>
              <Nav.Link style={{ color: "white" }} href="/calculator">
                <FontAwesomeIcon
                  icon={faCalculator}
                  style={{ color: "white" }}
                />{" "}
                MPI Calculator
              </Nav.Link>
              </Col>
            <Col>
              <Nav.Link style={{ color: "white" }} href="/">
              <Image src={ag.logo} height="50px" />{" "}
              </Nav.Link>
              </Col>
              {/* <Col>
              <Nav.Link style={{ color: "white" }} href="/about">
                <FontAwesomeIcon icon={faHome} style={{ color: "white" }} />{" "}
                 About
              </Nav.Link>
              </Col> */}
              <Col>
              <Nav.Link style={{ color: "white" }} href="https://mympi.com/financial-education/financial-news">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{ color: "white" }}
                />{" "}
                Financial News
              </Nav.Link>
              </Col>
              <Col>
              <Nav.Link style={{ color: "white" }} href="/faq">
                <FontAwesomeIcon
                  icon={faQuestion}
                  style={{ color: "white" }}
                />{" "}
                FAQs
              </Nav.Link>
              </Col>
              {/* <NavDropdown title="Other Places" id="basic-nav-dropdown">
                <NavDropdown.Item>Spot 1</NavDropdown.Item>
                <NavDropdown.Item>Spot 2</NavDropdown.Item>
                <NavDropdown.Item>Spot 3</NavDropdown.Item>
                <NavDropdown.Item>Spot 4</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          ))}
          </Row>
        </Navbar>
      </div>
    );
  }
}
