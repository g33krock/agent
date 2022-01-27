import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Client from "shopify-buy";
import { agentService } from "../services/AgentService";
import { About } from "./About/AboutComponent";
import { AboutCurtis } from "./About/AboutCurtisComponent";
import { Webinar } from "./HomePage/WebinarComponent";
import { Calculator } from "./HomePage/CalculatorComponent";
import { Calendar } from "./CalendarComponent";
import { ContactUs } from "./ContactUsComponent";
import { FAQ } from "./FAQ/FAQComponent";
import { Footer } from "./FooterComponent";
import { Header2 } from "./Header2Component";
import { Home } from "./HomePage/HomeComponent";
import { VideoSeries } from "./VideoSeries/VideoSeriesComponent";
import Shopify from "./Shopify/ShopifyComponent";
import SignIn from "./SignInComponent";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { AuthProvider } from "../contexts/Auth";
import RecoverPassword from "./RecoverComponent";
import Resume from "./ResumeComponent";

export function Main(props, user) {
  // const agentId = Math.floor(Math.random() * 34);
  const [agentId, setAgentId] = useState(4);
  const agentObject = { agentID: agentId };
  const agents = useState(() => {
    const allAgents = agentService.all();
    return allAgents;
  });
  const [agent, setAgent] = useState(() => {
    const initialAgent = agentService.one(agentObject);
    return initialAgent;
  });

  const handleChange = (e) => {
    setAgentId(e.currentTarget.value)
    const agentObject = { agentID: e.currentTarget.value };
    setAgent(() => {
      const initialAgent = agentService.one(agentObject);
      return initialAgent;
    });
    console.log(agentId);
    console.log(agent)
  }

  const params = new URLSearchParams(window.location.hash);

  const accessToken = params.get("access_token");

  console.log(accessToken);

  const [recoveryToken, setRecoveryToken] = useState(accessToken);
  const paidVideo = props.vids;
  const paidDeposit = props.deposit;
  console.log(paidVideo);
  console.log(paidDeposit);
  console.log(agents);
  console.log(recoveryToken);

  const client = Client.buildClient({
    domain: "mpiunlimited.myshopify.com",
    storefrontAccessToken: "9ce898b59cd04f20cd3e147fbfa95af2",
  });
  return recoveryToken ? (
    <RecoverPassword
      token={recoveryToken}
      setRecoveryToken={setRecoveryToken}
      user={user}
    />
  ) : (
    <div style={{ minHeight: "100vh" }}>
      <Header2 agent={agent} Id={agentId} agents={agents} style={{ marginLeft: "0px" }} />
      <Calendar agent={agent[0]} Id={agentId}></Calendar>
      <Row
        style={{
          marginRight: "0px",
          marginLeft: "0px",
          width: "100%",
          minHeight: "80vh",
          marginTop: "49px",
        }}
      >
        <Col style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      agent={agent[0]}
                      Id={agentId}
                      vids={paidVideo}
                      deposit={paidDeposit}
                    />
                  }
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
                  element={
                    <VideoSeries
                      agent={agent[0]}
                      Id={agentId}
                      vids={paidVideo}
                      deposit={paidDeposit}
                    />
                  }
                />
                <Route
                  path="contactus"
                  element={<ContactUs agent={agent[0]} Id={agentId} />}
                />
                <Route
                  path="career"
                  element={<Resume agent={agent[0]} Id={agentId} />}
                />
                <Route
                  path="curtisray"
                  element={<AboutCurtis agent={agent[0]} Id={agentId} />}
                />
                <Route
                  path="webinarregistration"
                  element={<Webinar agent={agent[0]} Id={agentId} />}
                />
                <Route
                  path="shopify"
                  element={
                    <Shopify agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="signin"
                  element={
                    <SignIn agent={agent[0]} Id={agentId} client={client} />
                  }
                />

                <Route
                  path="dashboard"
                  element={
                    <Dashboard agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="login"
                  element={
                    <Login agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="signup"
                  element={
                    <Signup agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="recoverpassword"
                  element={
                    <RecoverPassword
                      agent={agent[0]}
                      Id={agentId}
                      client={client}
                      user={user}
                    />
                  }
                />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </Col>
      </Row>
      <Footer agent={agent[0]} Id={agentId} style={{ marginLeft: "0px" }} />

      <select
        name="chooseAgent"
        id="chooseAgent"
        onChange={handleChange}
        // value={agentId.chooseAgent}
      >
        <option value="1">Geek Empire</option>
        <option value="2">Curtis Ray</option>
        <option value="3">Adam Rummler</option>
        <option value="4">Aidan Stout</option>
        <option value="5">Alex Alonso</option>
        <option value="6">Amy White</option>
        <option value="7">Brian Yoakam</option>
        <option value="8">Buddy Howel</option>
        <option value="9">Carmen Cuevas</option>
        <option value="10">Carolyn Blosil</option>
        <option value="11">Deb Brundage</option>
        <option value="12">Donnell Stidhum</option>
        <option value="13">Eric Rominger</option>
        <option value="14">Jae Kim</option>
        <option value="15">Jeffrey Blosil</option>
        <option value="16">Jimmy Rios</option>
        <option value="17">Joe Begalle</option>
        <option value="18">John Turner</option>
        <option value="19">Jose De Vega</option>
        <option value="20">Ken Kilday</option>
        <option value="21">Leon King</option>
        <option value="22">Norman Sanders</option>
        <option value="23">Porter Shumway</option>
        <option value="24">Riley Nelson</option>
        <option value="25">Robert Reid</option>
        <option value="26">Rustin Pearce</option>
        <option value="27">Rusty Vandall</option>
        <option value="28">Ryan Richardson</option>
        <option value="29">Scott McLaine</option>
        <option value="30">Shaun Akin</option>
        <option value="31">Spencer Alldredge</option>
        <option value="32">Steve Thurmond</option>
        <option value="33">Tyler Reynolds</option>
        <option value="34">Victor James</option>
        <option value="35">Lance Watson</option>
        <option value="36">Kindra Watson</option>
      </select>
      <Button onClick = {handleChange}>Change Agent</Button>
    </div>
  );
}
