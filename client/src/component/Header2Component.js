import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { agentService } from "../services/AgentService";
import { Col, Image, Navbar, Row } from "react-bootstrap";
// import { MyAccount } from "./AccountComponent";

export class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      agent: null,
      email: "",
      aboutDisplay: "none",
      contactDisplay: "none",
    };
  }

  async componentDidMount() {
    console.log(this.props.agent);
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

  async updateState() {
    console.log(this.props.agent);
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

  toggleAboutDisplay() {
    if (this.state.aboutDisplay === "none") {
      this.setState({ aboutDisplay: "block" });
    } else {
      this.setState({ aboutDisplay: "none" });
    }
  }

  toggleContactDisplay() {
    if (this.state.contactDisplay === "none") {
      this.setState({ contactDisplay: "block" });
    } else {
      this.setState({ contactDisplay: "none" });
    }
  }

  render() {
    console.log(this.state.agent);
    return (
      <>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <div
              className="sticky header"
              style={{ marginRight: "0px", marginBottom: "-52px" }}
            >
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
                      <Nav.Link
                        style={{ color: ag.textColor ? ag.textColor : "white" }}
                        href="/"
                      >
                        <Image src={ag.icon} id="icons" />{" "}
                      </Nav.Link>
                    </Col>
                    <Col
                      style={{
                        color: ag.textColor ? ag.textColor : "white",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      <Nav.Link
                        onClick={() => this.toggleAboutDisplay()}
                        style={{
                          color: ag.textColor ? ag.textColor : "white",
                          textShadow: "1px 1px black",
                          marginTop: "auto",
                          marginBottom: "auto",
                        }}
                      >
                        About
                      </Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link
                        style={{
                          color: ag.textColor ? ag.textColor : "white",
                          textShadow: "1px 1px black",
                          marginTop: "auto",
                          marginBottom: "auto",
                        }}
                        href="/videoseries"
                      >
                        Video Series
                      </Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link
                        style={{
                          color: ag.textColor ? ag.textColor : "white",
                          textShadow: "1px 1px black",
                          marginTop: "auto",
                          marginBottom: "auto",
                        }}
                        href="https://mympi.com/financial-education/financial-news"
                        target="_blank"
                      >
                        Financial News
                      </Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link
                        style={{
                          color: ag.textColor ? ag.textColor : "white",
                          textShadow: "1px 1px black",
                          marginTop: "auto",
                          marginBottom: "auto",
                        }}
                        href="/faq"
                      >
                        FAQs
                      </Nav.Link>
                    </Col>
                    <Col>
                      <Row>
                        <Nav.Link
                          // onClick={() => this.toggleContactDisplay()}
                          style={{
                            color: ag.textColor ? ag.textColor : "white",
                            textShadow: "1px 1px black",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                          href="contactus"
                        >
                          Contact Us
                        </Nav.Link>
                      </Row>
                      <Row>
                        <Col />
                        {ag.facebook && (
                          <Col style={{ padding: "0px" }}>
                            <a
                              href={ag.facebook}
                              style={{
                                paddingTop: "5px",
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                              className="socialMediaIcon"
                            >
                              <Image
                                width="20px"
                                src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Facebook.ico"
                              />
                            </a>
                          </Col>
                        )}
                        {ag.twitter && (
                          <Col style={{ padding: "0px" }}>
                            <a
                              href={ag.twitter}
                              style={{
                                paddingTop: "5px",
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                              className="socialMediaIcon"
                            >
                              <Image
                                width="25px"
                                src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Twitter.ico"
                              />
                            </a>
                          </Col>
                        )}
                        {ag.instagram && (
                          <Col style={{ padding: "0px" }}>
                            <a
                              href={ag.instagram}
                              style={{
                                paddingTop: "5px",
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                              className="socialMediaIcon"
                            >
                              <Image
                                width="20px"
                                src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Instagram.ico"
                              />
                            </a>
                          </Col>
                        )}
                        {ag.tiktok && (
                          <Col
                            style={{
                              padding: "0px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
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
                          <Col
                            style={{
                              padding: "0px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
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
                          <Col
                            style={{
                              padding: "0px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
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
                      <Nav.Link
                        style={{
                          color: ag.textColor ? ag.textColor : "white",
                          padding: "0px",
                        }}
                      >
                        {/* <MyAccount agent={ag}/> */}
                        <Image
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/MPIBadgeTransparentWHI.png"
                          fluid
                          style={{
                            backgroundColor: `${ag.primaryColor}`,
                            borderRadius: "50%",
                          }}
                          id="icons"
                        />
                      </Nav.Link>
                    </Col>
                  </Navbar.Collapse>
                </Navbar>
              </Row>
              <Row
                style={{
                  display: this.state.aboutDisplay,
                  backgroundColor: "white",
                }}
              >
                <Navbar>
                  <Col xs={2} />
                  <Col xs={4}>
                    <Row>
                      <Col xs={3} style={{ textAlign: "right" }}>
                        <Image
                          src={ag.altIcon ? ag.altIcon : ag.icon}
                          id="icons"
                        />{" "}
                      </Col>
                      <Col xs={9}>
                        <Nav.Link href="/about" style={{ textAlign: "left" }}>
                          <h3>{ag.agency}</h3>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={4}>
                    <Row>
                      <Col xs={3} style={{ textAlign: "right" }}>
                        <Image
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/MPIBadgeTransparentWHI.png"
                          fluid
                          style={{
                            backgroundColor: `${ag.primaryColor}`,
                            borderRadius: "50%",
                          }}
                          id="icons"
                        />{" "}
                      </Col>
                      <Col xs={9}>
                        <Nav.Link
                          href="/curtisray"
                          style={{ textAlign: "left" }}
                        >
                          <h3>Curtis Ray</h3>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2} />
                </Navbar>
              </Row>
              <Row
                style={{
                  display: this.state.contactDisplay,
                  backgroundColor: "white",
                }}
              >
                <Navbar>
                  <Col xs={2} />
                  <Col xs={4}>
                    <Row>
                      <Col xs={3} style={{ textAlign: "right" }}>
                        {/* <Image src={ag.altIcon ? ag.altIcon : ag.icon} id="icons" />{" "} */}
                      </Col>
                      <Col xs={9}>
                        <Nav.Link
                          href="/contactus"
                          style={{ textAlign: "left" }}
                        >
                          <h3>Contact Us</h3>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={4}>
                    <Row>
                      <Col xs={3} style={{ textAlign: "right" }}>
                        {/* <Image
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/MPIBadgeTransparentWHI.png"
                          fluid
                          style={{
                            backgroundColor: `${ag.primaryColor}`,
                            borderRadius: "50%",
                          }}
                          id="icons"
                        />{" "} */}
                      </Col>
                      <Col xs={9}>
                        <Nav.Link href="/career" style={{ textAlign: "left" }}>
                          <h3>Career Opportunities</h3>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2} />
                </Navbar>
              </Row>
            </div>
          ))}
      </>
    );
  }
}
