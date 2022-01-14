import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { agentService } from "../../services/AgentService";
import { Col, Image, Navbar, Row } from "react-bootstrap";


export class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: null,
      email: "",
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
      <div
        className="sticky header"
        style={{ marginRight: "0px", marginBottom: "-52px" }}
      >
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row key={ag.toString()}>
              <Navbar
                bg="dark"
                expand="lg"
                variant="dark"
                style={{ paddingBottom: "0px", paddingTop: "0px" }}
              >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                  <Col>
                    <Nav.Link style={{ color: `${ag.textColor}` }} href="/">
                      <Image src={ag.icon} id="icons" />{" "}
                    </Nav.Link>
                  </Col>
                  <Col style={{ color: `${ag.textColor}`, marginTop: "1%" }}>
                    <NavDropdown
                      title={<span style={{ color: "white" }}>About</span>}
                      style={{ color: `${ag.textColor}` }}
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item href="/about">
                        {ag.agency}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/curtisray">
                        Curtis Ray
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Col>
                  <Col>
                    <Nav.Link
                      style={{
                        color: `${ag.textColor}`,
                        textShadow: "1px 1px black",
                        marginTop: "5%",
                      }}
                      href="/videoseries"
                    >
                      Video Series
                    </Nav.Link>
                  </Col>
                  <Col>
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
                  <Col>
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
                  <Col>
                    <Row>
                      <Nav.Link
                        style={{
                          color: `${ag.textColor}`,
                          textShadow: "1px 1px black",
                          marginTop: "5%",
                          marginBottom: "0px",
                        }}
                        // onClick={() => window.open(`mailto:${ag.email}`)}
                        href="/contactus"
                      >
                        Contact Us
                      </Nav.Link>
                    </Row>
                    <Row>
                      <Col />
                      {ag.facebook && (
                        <Col style={{ padding: "0px" }}>
                          <a href={ag.facebook} style={{ paddingTop: "5px", marginLeft: "auto", marginRight: "auto" }} className="socialMediaIcon">
                            <Image
                              width="20px"
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Facebook.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.twitter && (
                        <Col style={{ padding: "0px" }}>
                          <a href={ag.twitter} style={{ paddingTop: "5px", marginLeft: "auto", marginRight: "auto" }} className="socialMediaIcon">
                            <Image
                              width="25px"
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Twitter.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.instagram && (
                        <Col style={{ padding: "0px" }}>
                          <a href={ag.instagram} style={{ paddingTop: "5px", marginLeft: "auto", marginRight: "auto" }} className="socialMediaIcon">
                            <Image
                              width="20px"
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Instagram.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.tiktok && (
                        <Col style={{ padding: "0px", marginLeft: "auto", marginRight: "auto" }}>
                          <a
                            href={ag.tiktok}
                            style={{ paddingTop: "5px" }}
                            className="socialMediaIcon"
                          >
                            <Image
                              width="18px"
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/TikTok.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.youtube && (
                        <Col style={{ padding: "0px", marginLeft: "auto", marginRight: "auto" }}>
                          <a
                            href={ag.youtube}
                            style={{ paddingTop: "5px" }}
                            className="socialMediaIcon"
                          >
                            <Image
                              width="20px"
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/YouTube.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.pinterest && (
                        <Col style={{ padding: "0px", marginLeft: "auto", marginRight: "auto" }}>
                          <a
                            href={ag.pinterest}
                            style={{ paddingTop: "5px" }}
                            className="socialMediaIcon"
                          >
                            <Image
                              width="20px"
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Pinterest.ico"
                            />
                          </a>
                        </Col>
                      )}
                      <Col></Col>
                    </Row>
                  </Col>
                  <Col>
                    <Nav.Link style={{ color: `${ag.textColor}` }} href="/">
                      <Image
                        src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/MPIBadgeTransparentWHI.png"
                        fluid
                        style={{
                          backgroundColor: `${ag.primaryColor}`,
                          borderRadius: "50%",
                        }}
                        id="icons"
                      />{" "}
                    </Nav.Link>
                  </Col>
                </Navbar.Collapse>
              </Navbar>
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
