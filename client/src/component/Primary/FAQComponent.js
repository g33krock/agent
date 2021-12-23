import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class FAQ extends Component {
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
            <Row
              style={{ color: `${ag.textColor}`, margin: "10px" }}
              key={ag.toString()}
            >
              <h1 style={{ marginBottom: "20px" }}>
                Frequently Asked Questions
              </h1>
              <Col>
                {faq.map((ques) => (
                  <Row style={{ margin: "10px" }} key={faq.toString()}>
                    <Col>
                      <h3>{ques.question}</h3>
                    </Col>
                    <Col>
                      <h3>{ques.answer}</h3>
                    </Col>
                    <Col>
                      <iframe
                        title={ques.question}
                        src={ques.video}
                        allowFullScreen
                        frameBorder="0"
                        controls poster="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/calculator.png"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        samesite="Strict"
                      ></iframe>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}
