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
import { reduxForm, Field } from 'redux-form';
import classnames from "classnames";
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import AlertMessage from '../ui/AlertMessage';


class Login extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };


  componentDidMount() {
    document.body.classList.toggle("login-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );

    this.props.clearMessage();
  }

  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    });
  };

  // on submit function
  onSubmit = (formProps) => {

    this.props.login(formProps);

  };

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="mx-auto" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: this.state.squares7and8 }}
                  />



                  <Card className="card-register">
                    <CardHeader >
                      <CardImg


                        height="92%"
                        className="img-opacity"
                        alt="..."
                        src={require("../../assets/img/shape.png")}
                      />
                      <CardTitle className="text-white" tag="h4">Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form
                        onSubmit={handleSubmit(this.onSubmit)}
                        className="form">

                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.emailFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            tag={Field}
                            component="input"
                            name="email"
                            placeholder="Email"
                            type="text"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.passwordFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            tag={Field}
                            component="input"
                            name="password"
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            style={{
                              WebkitTextSecurity: 'disc'
                            }}
                            onFocus={e =>
                              this.setState({ passwordFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ passwordFocus: false })
                            }
                          />
                        </InputGroup>
                        <CardFooter className="text-center">
                          <AlertMessage />
                          <Button type="submit" className="btn-round btn-block" color="warning" size="lg">
                            Login
                        </Button>
                          <br />
                          <div className="pull-left">
                            <h6>
                              <Link className="text-warning" to="/register" >CREATE ACCOUNT</Link>
                            </h6>
                          </div>
                        </CardFooter>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="login-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: this.state.squares1to6 }}
              />

              <div
                className="square square-3"
                id="square3"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: this.state.squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: this.state.squares1to6 }}
              />


            </Container>
          </div>
        </div>

      </div>


    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'login' })
)(Login)

