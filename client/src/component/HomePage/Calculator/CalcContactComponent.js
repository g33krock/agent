import React, { Component } from "react";
import { Row, Col, Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { Form } from "react-bootstrap";
import { agentService } from "../../../services/AgentService";

export class CalcContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modale: false,
      agent: null,
    };
  }

  async componentDidMount() {
      console.log(this.props.Id)
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

//   async updateState() {
//     const ID = this.props.Id;
//     const agentObject = { agentID: ID };
//     const agent = await agentService.one(agentObject);
//     this.setState({ agent });
//   }

  toggler() {
    return !this.state.modale;
  }

  render() {
    return (
      <div style={{ position: "sticky", top: "25%", height: "0px" }}>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Button
              style={{
                // backgroundColor: `${ag.primaryColor}`,
                backgroundColor: `black`,
                border: `2px solid ${ag.secondaryColor}`,
                color: `white`,
                width: "200px",
                textShadow: "1px 1px black",
              }}
              onClick={() => this.setState({modale: true})}
            >
              <p>LEARN MORE</p>
            </Button>
          ))}
        <Modal isOpen={this.state.modale} toggle={() => this.toggler()}>
          <ModalHeader>
            <h2 style={{ fontFamily: "Montserrat" }}>
              Connect With An Agent
            </h2>
          </ModalHeader>
          <ModalBody>
            {this.state.agent &&
              this.state.agent.map((ag) => (
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
                        <Form.Control type="email" placeholder="Enter email" />
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
                    <Button
                      style={{
                        backgroundColor: ag.primaryColor,
                        textShadow: "1px 1px black",
                        color: ag.textColor ? ag.textColor : "white",
                      }}
                    >
                      Submit
                    </Button>
                  </Row>
                </Form>
              ))}
          </ModalBody>
          {/* <Modal.Footer> */}
          <Button
            style={{ backgroundColor: "secondary" }}
            onClick={() => this.setState({ modale: false })}
          >
            Close
          </Button>
          {/* </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}
