import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import { faqService } from "../../services/FAQService";

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
    const faq = [
      {
        id: 1,
        question: "What does the fox say?",
        answer: "Yippy-Kay-Ye!",
        video: "https://www.youtube.com/embed/jofNR_WkoCE",
      },
      {
        id: 2,
        question: "How do I make lots of money?",
        answer: "Do Compound Interest Stuff",
        video:
          "https://compoundinterest.com/wp-content/uploads/2021/10/Sharing-This-Course.mp4",
      },
      {
        id: 3,
        question: "What should I do with all my money?",
        answer: "Get more of it",
        video:
          "https://compoundinterest.com/wp-content/uploads/2021/11/02-The-Science-Of-Compound-Interest-1.mp4",
      },
    ];
    return (
      <Container fluid>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ color: `black`, margin: "10px" }} key={ag.toString()}>
              <h1 style={{ marginBottom: "20px" }}>
                Frequently Asked Questions
              </h1>
              <Col>
                {this.state.faqs &&
                  this.state.faqs
                    .filter((n) => n.id % 2)
                    .map((ques) => (
                      <Collapsible trigger={[<BsChevronDown />, ques.question]}>
                        <Row style={{ margin: "10px" }} key={faq.toString()}>
                          <Col>
                            <p>{ques.answer}</p>
                          </Col>
                          <Col>
                            <iframe
                              title={ques.question}
                              src={ques.video}
                              allowFullScreen
                              frameBorder="0"
                              controls
                              poster="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/calculator.png"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              samesite="Strict"
                            ></iframe>
                          </Col>
                        </Row>
                      </Collapsible>
                    ))}
              </Col>
              <Col>
                {this.state.faqs &&
                  this.state.faqs
                  .filter(function(element, index, array) {
                    return (index % 2 !== 0)})
                    .map((ques) => (
                      <Collapsible trigger={[<BsChevronDown />, ques.question]}>
                        <Row style={{ margin: "10px" }} key={faq.toString()}>
                          <Col>
                            <p>{ques.answer}</p>
                          </Col>
                          <Col>
                            <iframe
                              title={ques.question}
                              src={ques.video}
                              allowFullScreen
                              frameBorder="0"
                              controls
                              poster="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/calculator.png"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              samesite="Strict"
                            ></iframe>
                          </Col>
                        </Row>
                      </Collapsible>
                    ))}
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}
