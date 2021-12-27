import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { agentService } from "../../services/AgentService";

import { Col, Image, Row } from "react-bootstrap";

export class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: null,
      email: ""
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
      <div className="sticky header" style={{marginRight: "0px"}}>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ width: "101%", backgroundColor: "rgb(0, 0, 0)" }} key={ag.toString()}>
              <Col xs={2}>
                <Nav.Link style={{ color: `${ag.textColor}` }} href="/">
                  <Image src={ag.icon} id="icons" />{" "}
                </Nav.Link>
              </Col>
              <Col xs={2}>
                <Nav.Link
                  style={{
                    color: `${ag.textColor}`,
                    textShadow: "1px 1px black",
                    marginTop: "5%",
                  }}
                  href="/about"
                >
                  About
                </Nav.Link>
              </Col>
              <Col xs={2}>
                <Nav.Link
                  style={{
                    color: `${ag.textColor}`,
                    textShadow: "1px 1px black",
                    marginTop: "5%",
                  }}
                  href="/videoseries"
                >
                  Compound Interest<br/>Video Series
                </Nav.Link>
              </Col>
              <Col xs={2}>
                <Nav.Link
                  style={{
                    color: `${ag.textColor}`,
                    textShadow: "1px 1px black",
                    marginTop: "5%",
                  }}
                  href="https://mympi.com/financial-education/financial-news"
                >
                  Financial News
                </Nav.Link>
              </Col>
              <Col xs={2}>
                <Nav.Link
                  style={{
                    color: `${ag.textColor}`,
                    textShadow: "1px 1px black",
                    marginTop: "5%",
                  }}
                  href="/faq"
                >
                  FAQs
                </Nav.Link>
              </Col>
              <Col xs={2}>
                <Nav.Link
                  style={{
                    color: `${ag.textColor}`,
                    textShadow: "1px 1px black",
                    marginTop: "5%",
                  }}
                  // onClick={() => window.open(`mailto:${ag.email}`)}
                  href="/contactus"
                >
                  Contact Us
                </Nav.Link>
              </Col>
              {/* <NavDropdown title="Other Places" id="basic-nav-dropdown">
                <NavDropdown.Item>Spot 1</NavDropdown.Item>
                <NavDropdown.Item>Spot 2</NavDropdown.Item>
                <NavDropdown.Item>Spot 3</NavDropdown.Item>
                <NavDropdown.Item>Spot 4</NavDropdown.Item>
              </NavDropdown> */}
            </Row>
          ))}
      </div>
    );
  }
}
