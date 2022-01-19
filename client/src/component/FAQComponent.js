import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../services/AgentService";
import { faqService } from "../services/FAQService";
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

  render() {
    return (
      <Container fluid>
        <Row
          style={{
            height: "30vh",
            backgroundImage:
              "url(https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/SDRPBackdrop.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "auto",
          }}
        >
          <h1 style={{ marginTop: "10vh", color: '#056fcb', fontSize: "500%", fontWeight: "900" }}>FAQ</h1>
        </Row>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ color: `black`, margin: "10px" }} key={ag.toString()}>
              <Row>
                <p>
                  These FAQs are intended use by individuals who have reviewed
                  the video series educational “COMPOUND INTEREST: THE
                  RETIREMENT YOU DESERVE” and have a foundational understanding
                  of the MPI® Secure Compound Interest Strategy, including the
                  use of cash value life insurance contracts, and the
                  guarantees, assumptions, features, and risks associated with
                  them.
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
                    <h1 style={{ color: "white" }}>Side By Side Comparison</h1>
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
          ))}
      </Container>
    );
  }
}
