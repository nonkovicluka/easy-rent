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
import { Link, withRouter } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import jwt from 'jsonwebtoken';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-success"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };

  onLogout = () => {

    const { history } = this.props;

    this.props.logout(() => {
      history.push('/');
    });

  };

  renderLinks() {

    if (this.props.token) {
      const { user } = jwt.decode(this.props.token);
      return (

        <Nav navbar>
          {(user.role.name === 'Manager' || user.role.name === 'Admin') ?

            <UncontrolledDropdown nav>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="navbarDropdownMenuLink"
                nav
                onClick={e => e.preventDefault()}
              >
                Accommodation
            </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                <DropdownItem
                  tag={Link}
                  to="/accommodation"

                >
                  All accommodation
               </DropdownItem>
                <DropdownItem
                  tag={Link}
                  to="/my-accommodation"

                >
                  My accommodation
             </DropdownItem>
                <DropdownItem
                  tag={Link}
                  to="/accommodation/register"

                >
                  Register accommodation
             </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
            : (<NavItem>
              <NavLink tag={Link} to="/accommodation">
                Accommodation
                  </NavLink>
            </NavItem>
            )
          }
          {user.role.name === 'Admin' ?
            <NavItem>
              <NavLink tag={Link} to="/manage">
                Manage
              </NavLink>
            </NavItem>
            : null}
          <NavItem>
            <NavLink>
              Hi {user.name}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ cursor: 'pointer' }} onClick={this.onLogout}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to="/accommodation">
              Accommodation
                  </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/login">
              Login
                </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/register">
              Register
            </NavLink>
          </NavItem>
        </Nav>
      );
    }

  }


  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
              Easy Rent
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Easy Rent
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>

            </Nav>
            {this.renderLinks()}


          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.auth.token }
}

export default compose(
  withRouter,
  connect(mapStateToProps, actions))(PagesNavbar);
