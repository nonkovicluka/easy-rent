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

class Register extends React.Component {
  state = {};

  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");

    this.props.clearMessage();
  }



  // on submit function
  onSubmit = (formProps) => {


    this.props.register(formProps);

  };


  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="page-header">
        <div className="section section-signup">
          <Container>
            <div className="squares square-1" />
            <div className="squares square-2" />
            <div className="squares square-3" />
            <div className="squares square-4" />
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                  Renting beautiful apartments{" "}
                  <span className="text-white">is now easier than ever</span>
                </h3>
                <p className="text-white mb-3">
                  Easy Rent is place where both customers and accomodation
                  owers can benefit from using it. Registration is straightforward
                  and afterwards you will be able to rent apartments or if you are
                   manager you will be able to register your accomodation.
              </p>

              </Col>
              <Col className="mb-lg-auto" lg="6">

                <Card className="card-register">
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/square-purple-1.png")}
                    />
                    <CardTitle tag="h4">Register</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={handleSubmit(this.onSubmit)}
                      className="form">
                      <InputGroup
                        className={classnames({
                          "input-group-focus": this.state.fullNameFocus
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          tag={Field}
                          component="input"
                          name="name"
                          placeholder="Full Name"
                          type="text"
                          autoComplete="off"
                          onFocus={e =>
                            this.setState({ fullNameFocus: true })
                          }
                          onBlur={e =>
                            this.setState({ fullNameFocus: false })
                          }
                        />
                      </InputGroup>
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
                          autoComplete="off"
                          type="text"
                          required
                          onFocus={e => this.setState({ emailFocus: true })}
                          onBlur={e => this.setState({ emailFocus: false })}
                        />
                      </InputGroup>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": this.state.roleFocus
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-badge" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          tag={Field}
                          component="select"
                          type="select"
                          name="role"
                          onFocus={e => this.setState({ roleFocus: true })}
                          onBlur={e => this.setState({ roleFocus: false })}>
                          <option value="">Select account type</option>
                          <option value="user">User</option>
                          <option value="manager">Manager</option>
                        </Input>
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
                          autoComplete="off"
                          type="password"
                          required
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
                      <CardFooter>
                        <Button type="submit" className="btn-round" color="primary" size="lg">
                          Register
                               </Button>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'register' })
)(Register)

