/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Row,
  Col
} from "reactstrap";


class LandingPage extends React.Component {

state = {
  img: 'images/home/hotel1.png'
};

  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  
  
  render() {

    return (
      <>
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("../../assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../../assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("../../assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("../../assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("../../assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../../assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    We make renting <br />
                    <span className="text-white">easier</span>
                  </h1>
                  <p className="text-white mb-3">

                    Whether you are a landlord or want to rent an apartment,
                    is a place where you can do both. In just few steps you
                    will be able to use our services free of charge.
                  </p>
                  <Link
                    onMouseEnter={()=> this.setState({img: "images/home/hotel1.png"})}
                    onMouseLeave={()=> this.setState({img: "images/home/hotel2.png"})}
                    to="/register">
                    <div className="btn-wrapper mb-3">
                      <p className="category text-success d-inline">
                        Join us
                    </p>

                      <Button
                        className="btn-link"
                        color="success"
                        size="sm"
                      >
                        <i className="tim-icons icon-minimal-right" />
                      </Button>
                    </div>
                  </Link>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="5" md="6">
                  <img
                    alt="..."
                    className="img-fluid h-100 w-100 pb-4"
                    src={`http://localhost:8000/${this.state.img}`}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
