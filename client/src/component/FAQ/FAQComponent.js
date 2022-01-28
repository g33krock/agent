import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import { faqService } from "../../services/FAQService";
import { FAQVideo } from "./FAQVideoComponent";

export class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      faqs: [],
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(this.props.agent);
    const faqs = await faqService.all();
    this.setState({ faqs });
    console.log(this.state.faqs);
    console.log(ID);
  }

  async updateState() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(this.props.agent);
    const faqs = await faqService.all();
    this.setState({ faqs });
    console.log(this.state.faqs);
    console.log(ID);
  }

  render() {
    return (
      <>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Container fluid style={{padding:'0px'}}>
              <Row
                
                  style={{padding: '0px', backgroundImage: `url("${ag.backdrop}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', top: 0, left: 0, minWidth: '95vw', height: '30vh'}}
                
              >
                <h1
                  style={{
                    marginTop: "10vh",
                    color: ag.primaryColor,
                    fontSize: "500%",
                    fontWeight: "900",
                  }}
                >
                  FAQ
                </h1>
              </Row>

              <Row
                style={{ color: `black`, margin: "10px" }}
                key={ag.toString()}
              >
                <Row>
                  <p>
                    These FAQs are intended use by individuals who have reviewed
                    the video series educational “COMPOUND INTEREST: THE
                    RETIREMENT YOU DESERVE” and have a foundational
                    understanding of the MPI® Secure Compound Interest Strategy,
                    including the use of cash value life insurance contracts,
                    and the guarantees, assumptions, features, and risks
                    associated with them.
                  </p>
                </Row>
                <Row
                  style={{ backgroundColor: ag.primaryColor, color: "white" }}
                ></Row>
                {/* <Col sm={2} /> */}
                <Row>
                  <Col style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Row style={{ backgroundColor: ag.primaryColor }}>
                      <h1 style={{ color: "white" }}>
                        Frequently Asked Questions
                      </h1>
                    </Row>
                    {this.state.faqs &&
                      this.state.faqs
                        .filter((n) => n.category === "faq")
                        .map((ques) => (
                          <Row style={{ marginTop: "2%", marginBottom: "2%" }}>
                            <Col xs={0} md={1} />
                            <Col xs={3} md={2}>
                              <FAQVideo faq={ques} />
                              {/* <Image fluid src={ques.poster} /> */}
                            </Col>
                            <Col
                              xs={9}
                              md={9}
                              style={{
                                fontSize: "125%",
                                borderBottom: "2px solid black",
                              }}
                            >
                              <Collapsible
                                trigger={[
                                  <BsChevronDown />,
                                  <span style={{ textAlign: "left" }}>
                                    {ques.question}
                                  </span>,
                                ]}
                              >
                                <Row style={{ margin: "10px" }}>
                                  <Col>
                                    <p style={{ fontSize: "50%" }}>
                                      {ques.answer}
                                    </p>
                                  </Col>
                                </Row>
                              </Collapsible>
                            </Col>
                          </Row>
                        ))}
                  </Col>
                  <Col xs={0} md={1} />
                  <Col style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Row style={{ backgroundColor: ag.primaryColor }}>
                      <h1 style={{ color: "white" }}>
                        Side By Side Comparison
                      </h1>
                    </Row>
                    {this.state.faqs &&
                      this.state.faqs
                        .filter((n) => n.category === "sidebyside")
                        .map((ques) => (
                          <Row style={{ marginTop: "2%", marginBottom: "2%" }}>
                            <Col xs={0} md={1} />
                            <Col xs={3} md={2}>
                              <FAQVideo faq={ques} />
                              {/* <Image fluid src={ques.poster} /> */}
                            </Col>
                            <Col
                              xs={9}
                              md={9}
                              style={{
                                fontSize: "125%",
                                borderBottom: "2px solid black",
                              }}
                            >
                              <Collapsible
                                trigger={[
                                  <BsChevronDown />,
                                  <span style={{ textAlign: "left" }}>
                                    {ques.question}
                                  </span>,
                                ]}
                              >
                                <Row style={{ margin: "10px" }}>
                                  <Col>
                                    <p style={{ fontSize: "50%" }}>
                                      {ques.answer}
                                    </p>
                                  </Col>
                                </Row>
                              </Collapsible>
                            </Col>
                          </Row>
                        ))}
                  </Col>
                </Row>
              </Row>
            </Container>
          ))}
      </>
    );
  }
}
