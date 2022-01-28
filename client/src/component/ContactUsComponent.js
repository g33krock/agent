import React, { Component } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { agentService } from "../services/AgentService";
// import Avatar from "./AvatarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(this.props.agent);
    console.log(ID);
  }

  async updateState() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(this.props.agent);
    console.log(ID);
  }

  render() {
    return (
      <>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Container fluid style={{ padding: "0px" }}>
              <Row
                style={{
                  height: "30vh",
                  backgroundImage: `url("${ag.backdrop}")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  top: 0,
                  left: 0,
                  margin: "auto",
                }}
              >
                <h1
                  id="bigMonty"
                  style={{
                    marginTop: "10vh",
                    color: ag.primaryColor,
                    fontSize: "500%",
                    fontWeight: "900",
                  }}
                >
                  CONTACT US
                </h1>
              </Row>

              <Row style={{ margin: "10px" }} key={ag.toString()}>
                <Col xs={1} />
                <Col xs={5}>
                  <Container
                    style={{
                      width: "90%",
                      backgroundColor: "white",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Row style={{ marginTop: "1%", paddingTop: "1%" }}>
                      <Col sm={1} />
                      <Col sm={11} style={{ textAlign: "left" }}>
                        <h2 id="bigMonty">GET IN TOUCH</h2>
                        <p id="bigMonty">
                          Thank you for reaching ou to us, please allow up to 72
                          hours for our office to reply
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </Col>
                      <Col sm={11} style={{ textAlign: "left" }}>
                        <p>
                          <strong>ADDRESS</strong>
                          <br />
                          {ag.address1}
                          <br />
                          {ag.city}, {ag.state} {ag.zip}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Col>
                      <Col sm={11} style={{ textAlign: "left" }}>
                        <p>
                          <strong>EMAIL</strong>
                          <br />
                          {ag.email}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faPhone} />
                      </Col>
                      <Col sm={11} style={{ textAlign: "left" }}>
                        <p>
                          <strong>PHONE</strong>
                          <br />
                          {ag.phone}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col />
                      {ag.facebook && (
                        <Col style={{ padding: "1%" }}>
                          <a href={ag.facebook}>
                            <Image
                              style={{ margin: "1%" }}
                              fluid
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Facebook.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.twitter && (
                        <Col style={{ padding: "0px", width: "110%" }}>
                          <a href={ag.twitter}>
                            <Image
                              style={{ margin: "1%" }}
                              fluid
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Twitter.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.instagram && (
                        <Col style={{ padding: "1%" }}>
                          <a href={ag.instagram}>
                            <Image
                              style={{ margin: "1%" }}
                              fluid
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Instagram.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.tiktok && (
                        <Col style={{ padding: "1%" }}>
                          <a href={ag.tiktok}>
                            <Image
                              style={{ margin: "1%", width: "80%" }}
                              fluid
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/TikTok.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.youtube && (
                        <Col style={{ padding: "1%" }}>
                          <a href={ag.youtube}>
                            <Image
                              style={{ margin: "1%" }}
                              fluid
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/YouTube.ico"
                            />
                          </a>
                        </Col>
                      )}
                      {ag.pinterest && (
                        <Col style={{ padding: "1%" }}>
                          <a href={ag.pinterest}>
                            <Image
                              style={{ margin: "1%" }}
                              fluid
                              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Pinterest.ico"
                            />
                          </a>
                        </Col>
                      )}
                      <Col />
                    </Row>
                  </Container>
                </Col>
                <Col xs={5}>
                  <Form>
                    <p style={{ textAlign: "left", marginBottom: "0px" }}>
                      Your Name
                    </p>
                    <Row>
                      <Col sm={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupfirstName"
                        >
                          <Form.Control placeholder="First Name" />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formGrouplastName"
                        >
                          <Form.Control placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <p style={{ textAlign: "left", marginBottom: "0px" }}>
                            Email address
                          </p>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group className="mb-3" controlId="formGroupState">
                          <p style={{ textAlign: "left", marginBottom: "0px" }}>
                            State
                          </p>
                          <Form.Select>
                            <option></option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="AS">American Samoa</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Deleware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="GU">Guam</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="CM">North Mariana Islands</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="TT">Trust Territories</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="VI">Virgin Islands</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group className="mb-3" controlId="formGroupPhone">
                        <p style={{ textAlign: "left", marginBottom: "0px" }}>
                          Phone
                        </p>
                        <Form.Control placeholder="(123)456-7890" />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group className="mb-3" controlId="formGroupSubject">
                        <p style={{ textAlign: "left", marginBottom: "0px" }}>
                          Subject
                        </p>
                        <Form.Control placeholder="Enter Subject" />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group className="mb-3" controlId="formGroupText">
                        <p style={{ textAlign: "left", marginBottom: "0px" }}>
                          Your Message
                        </p>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter Message"
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Button style={{backgroundColor: ag.primaryColor, textShadow: '1px 1px black', color: ag.textColor ? ag.textColor : 'white'}}>Submit</Button>
                    </Row>
                  </Form>
                </Col>
                <Col xs={1} />
                {/* <Avatar agency={ag.agency} /> */}
              </Row>
            </Container>
          ))}
      </>
    );
  }
}
