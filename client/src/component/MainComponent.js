import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { agentService } from "../services/AgentService";
import { About } from "./AboutComponent";
// import { Bottom } from "./BottomComponent";
import { Calculator } from "./CalculatorComponent";
import { Calendar } from "./CalendarComponent";
import { FAQ } from "./FAQComponent";
import { Footer } from "./FooterComponent";
import { Header2 } from "./Header2Component";

import { Home } from "./HomeComponent";
import { VideoSeries } from "./VideoSeriesComponent";

export function Main() {
  const agentId = 4;
  const agentObject = { agentID: agentId };
  const [agent] = useState(() => {
    const initialAgent = agentService.one(agentObject);
    return initialAgent;
  });

  console.log({ agent });
  console.log({ agentObject });
  return (
    <div style={{minHeight: "100vh"}}>
      <video autoPlay loop muted id="video">
        <source
          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/videos/dockVideo.mp4"
          type="video/mp4"
        />
      </video>
 
              {/* <img 
              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/SDRPBackdrop.png"
              alt="DS"
              className="backdrop"/> */}

      <Header2 agent={agent[0]} Id={agentId} style={{ marginLeft: "0px" }} />
      <Calendar agent={agent[0]} Id={agentId}></Calendar>
      <Row style={{ marginRight: "0px", marginLeft: "0px", width: "100%", minHeight: "80vh" }}>
        <Col style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Home agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="about"
                element={<About agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="calendar"
                element={<Calendar agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="calculator"
                element={<Calculator agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="faq"
                element={<FAQ agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="videoseries"
                element={<VideoSeries agent={agent[0]} Id={agentId} />}
              />
            </Routes>
          </BrowserRouter>
        </Col>
        {/* <Col xs={2} style={{ color: `white`, position:"relative", padding: "0px" }}>
          <SideMenu agent={agent[0]} Id={agentId} />
        </Col> */}
      </Row>
      <Footer agent={agent[0]} Id={agentId} style={{ marginLeft: "0px" }}/>
      {/* <Bottom /> */}
    </div>
  );
}
