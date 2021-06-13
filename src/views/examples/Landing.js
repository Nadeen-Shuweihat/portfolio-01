/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {" "}
            {/* shape Hero */}{" "}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>{" "}
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Nadeen Shuweihat{" "}
                        <span> Software developer (soon) </span>{" "}
                      </h1>{" "}
                      <p className="lead text-white">
                        Interested in learning HTML, JS, CSS, REACT-JS{" "}
                      </p>{" "}
                    </Col>{" "}
                  </Row>{" "}
                </div>{" "}
              </Container>{" "}
              {/* SVG separator */}{" "}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>{" "}
              </div>{" "}
            </section>{" "}
            {/* 1st Hero Variation */}{" "}
          </div>{" "}
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>{" "}
                          <h6 className="text-primary text-uppercase">
                            201 Project - CourseCom{" "}
                          </h6>{" "}
                          <p className="description mt-3">
                            This project is an online learning website that
                            offers courses in the web development field and was
                            bulit witha great team called Robots Sqaud.{" "}
                          </p>{" "}
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Elearning{" "}
                            </Badge>{" "}
                            <Badge color="primary" pill className="mr-1">
                              Education{" "}
                            </Badge>{" "}
                            <Badge color="primary" pill className="mr-1">
                              Courses{" "}
                            </Badge>{" "}
                          </div>{" "}
                        </CardBody>{" "}
                      </Card>{" "}
                    </Col>{" "}
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>{" "}
                          <h6 className="text-success text-uppercase"> 301 </h6>{" "}
                          <p className="description mt-3"> on the way... </p>{" "}
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business{" "}
                            </Badge>{" "}
                            <Badge color="success" pill className="mr-1">
                              vision{" "}
                            </Badge>{" "}
                            <Badge color="success" pill className="mr-1">
                              success{" "}
                            </Badge>{" "}
                          </div>{" "}
                        </CardBody>{" "}
                      </Card>{" "}
                    </Col>{" "}
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>{" "}
                          <h6 className="text-warning text-uppercase"> 401 </h6>{" "}
                          <p className="description mt-3"> soon! </p>{" "}
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing{" "}
                            </Badge>{" "}
                            <Badge color="warning" pill className="mr-1">
                              product{" "}
                            </Badge>{" "}
                            <Badge color="warning" pill className="mr-1">
                              launch{" "}
                            </Badge>{" "}
                          </div>{" "}
                        </CardBody>{" "}
                      </Card>{" "}
                    </Col>{" "}
                  </Row>{" "}
                </Col>{" "}
              </Row>{" "}
            </Container>{" "}
          </section>{" "}
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img alt="..." className="img-fluid floating" src={promo1} />{" "}
                </Col>{" "}
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>{" "}
                    <h3> Course Com site </h3>{" "}
                    <p>
                      It 's a 201 project called CourseCom which offers online
                      courses in web development field.{" "}
                    </p>{" "}
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>{" "}
                          </div>{" "}
                          <div>
                            <h6 className="mb-0"> Front End Courses </h6>{" "}
                          </div>{" "}
                        </div>{" "}
                      </li>{" "}
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>{" "}
                          </div>{" "}
                          <div>
                            <h6 className="mb-0"> Back End Courses </h6>{" "}
                          </div>{" "}
                        </div>{" "}
                      </li>{" "}
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>{" "}
                          </div>{" "}
                          <div>
                            <h6 className="mb-0"> DataBase Courses </h6>{" "}
                          </div>{" "}
                        </div>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>{" "}
            </Container>{" "}
          </section>{" "}
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>{" "}
                      <h4 className="display-3 font-weight-bold text-white">
                        Nadeen Shuweihat{" "}
                      </h4>{" "}
                      <p className="lead text-italic text-white">
                        Software Developer(on the way){" "}
                      </p>{" "}
                    </blockquote>{" "}
                  </Card>{" "}
                </Col>{" "}
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>{" "}
                    <h3> About Me: </h3>{" "}
                    <p className="lead">
                      My name is Nadeen Shuweihat.I have previous experince as a
                      receptionist and interier designer.I decided I want to
                      learn software development and got the chance to learn
                      that in LTUC.There 's many reasons why I approach this
                      field.Firstly, the field of software development and in
                      particular web development have alot of demand in the
                      market and good income, secondly why not spending my free
                      time in doing something i love, which is keep on learning
                      and getting knowledge.{" "}
                    </p>{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>{" "}
            </Container>{" "}
          </section>{" "}
        </main>{" "}
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
