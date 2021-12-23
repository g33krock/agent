import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { agentService } from "../../services/AgentService";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faQuestion,
  faNewspaper,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { Col, Image, Row } from "react-bootstrap";

export class Header2 extends Component {
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
  }

  render() {
    return (
      <div className="sticky header">
          
          {this.state.agent &&
          this.state.agent.map((ag) => (

            <Row style={{ width: "100%"}} key={ag.toString()}>
                <Col xs={1}></Col>
            <Col xs={2}>
              <Nav.Link style={{ color: `${ag.textColor}`, textShadow: "1px 1px black" }}  href="/videoseries">
                <FontAwesomeIcon
                  icon={faVideo}
                  style={{ color: `${ag.textColor}` }} 
                />{" "}
                Video Series
              </Nav.Link>
              </Col>
              <Col xs={2}>
              <Nav.Link style={{ color: `${ag.textColor}`, textShadow: "1px 1px black" }} href="/about">
                <FontAwesomeIcon icon={faHome} style={{ color: `${ag.textColor}` }} />{" "}
                 About
              </Nav.Link>
              </Col>
            <Col xs={2}>
              <Nav.Link style={{ color: `${ag.textColor}` }}  href="/">
              <Image src={ag.icon} style={{maxHeight: "50px"}} />{" "}
              </Nav.Link>
              </Col>
              <Col xs={2}>
              <Nav.Link style={{ color: `${ag.textColor}`, textShadow: "1px 1px black" }} href="https://mympi.com/financial-education/financial-news">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{ color: `${ag.textColor}` }} 
                />{" "}
                Financial News
              </Nav.Link>
              </Col>
              <Col xs={2}>
              <Nav.Link style={{ color: `${ag.textColor}`, textShadow: "1px 1px black" }}  href="/faq">
                <FontAwesomeIcon
                  icon={faQuestion}
                  style={{ color: `${ag.textColor}` }} 
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
              <Col xs={1}></Col>
              </Row>


          ))}
          

      </div>
    );
  }
}
