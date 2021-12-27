import React, { Component } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import Avatar from "./AvatarComponent";

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

  render() {
    return (
      <Container fluid>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "10px" }} key={ag.toString()}>
              <Col xs={4}>
                <Image src={ag.profilePic} roundedCircle fluid />
                <h5>
                  {ag.firstName} {ag.lastName}
                </h5>
              </Col>

              <Col xs={4}>
                <Row>
                  <h1 style={{ color: ag.textColor }}>Always Be Compounding</h1>
                </Row>
                <Row>
                  <p style={{ color: ag.textColor }}>
                    You've come to understnad the power this phrase holds and
                    are excited about helping others along the journey. If
                    you're interested in one of the many positions at our home
                    office, including working directly with an MPI® Certified
                    Advisor as an MPI® Specialist, please let us know why you'd
                    be a great fit to join the team. We'll review your request
                    and get back as soon as we can. Thank you for your interest!
                    <br />
                  </p>
                  <p style={{ color: ag.textColor }}>
                    <strong>*NOTE*</strong> The onboarding process for
                    independent agents is currently closed. If you are an
                    independent agent looking to become an MPI® Certified
                    Advisor and offer MPI® to your clients, you are welcome to
                    submit a request and we will alert you when we get closer to
                    our nex MPI® Momentum Event. We're hoping to host another
                    event in the Summer of 2021.
                  </p>
                </Row>
              </Col>
              <Col xs={4}>
                <Form>
                  <Form.Label style={{ color: ag.textColor }}>
                    Your Name
                  </Form.Label>
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
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: ag.textColor }}>
                        Email address
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: ag.textColor }}>
                        Location
                      </Form.Label>
                      <Form.Control placeholder="Enter Location" />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      className="mb-3"
                      controlId="formGroupText"
                    >
                      <Form.Label style={{ color: ag.textColor }}>Your Message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Row>
                </Form>
              </Col>

              <Avatar agency={ag.agency} />
            </Row>
          ))}
      </Container>
    );
  }
}
