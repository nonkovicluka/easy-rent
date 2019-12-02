import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    Col,
    Row,
    Button,
    UncontrolledTooltip
} from "reactstrap";

import * as actions from '../../actions';


class UsersAndAccommodation extends Component {

    componentDidMount() {

        this.props.getUsers();
        this.props.searchAccommodation({ unchecked: true });


    }

    onClickBan = (id) => {

        this.props.banUser(id);

    }

    onClickApprove = (id) => {

        this.props.approveAccommodation(id);

    }


    renderTable(bool) {


        const userColumns = [
            {
                Header: '#',
                accessor: 'id',
                maxWidth: 30
            }, {
                Header: 'Name',
                accessor: 'name',
                maxWidth: 190,
                Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
            }, {
                Header: 'Email',
                accessor: 'email',
                maxWidth: 250
            }, {
                Header: 'Role',
                accessor: 'role.name',
                maxWidth: 120,
                Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
            }, {
                Header: 'Ban',
                maxWidth: 60,
                Cell: props => <span>

                    <Button
                        onClick={() => this.onClickBan(props.original.id)}
                        className="btn-icon btn-round btn-simple"
                        id={`ban-${props.original.id}`}
                        color="danger" size="sm" type="button">
                        <i className="fa fa-times" />
                    </Button>{` `}
                    <UncontrolledTooltip placement="top" target={`ban-${props.original.id}`} delay={100}>
                        Ban user
            </UncontrolledTooltip>
                </span>
            }

        ];

        const accommodationColumns = [
            {
                Header: '#',
                accessor: 'id',
                maxWidth: 30
            }, {
                Header: 'Name',
                accessor: 'name',
                maxWidth: 140,
                Cell: this.renderEditable
            }, {
                Header: 'Description',
                accessor: 'description',
                maxWidth: 260,
                Cell: this.renderEditable
            }, {
                Header: 'Address',
                accessor: 'address'
            }, {
                Header: 'Type',
                accessor: 'accommodation_type.name',
                maxWidth: 60
            }, {
                Header: 'Approve',
                Cell: props => <span>

                    <Button onClick={() => this.onClickApprove(props.original.id)} className="btn-icon btn-round btn-simple" id={`edit-${props.original.id}`} color="success" size="sm" type="button">
                        <i className="fas fa-check"></i>
                    </Button>
                    {` `}
                    <UncontrolledTooltip placement="top" target={`edit-${props.original.id}`} delay={100}>
                        Approve accommodation
                    </UncontrolledTooltip>
                </span>,
                maxWidth: 60
            }

        ];

        const tableStyle = {
            color: '#ced4da',
            padding: '1rem',
            verticalAlign: 'top'
        };


        if (bool && this.props.users) {

            return (
                <div>
                    <ReactTable
                        style={tableStyle}
                        className="-striped -highlight"
                        data={this.props.users}
                        columns={userColumns}
                        defaultPageSize={5}
                    />
                    <br /><br /><br /><br />
                </div>
            );
        }

        if (!bool && this.props.accommodations) {

            return (
                <div>
                    <ReactTable
                        style={tableStyle}
                        className="-striped -highlight"
                        data={this.props.accommodations}
                        columns={accommodationColumns}
                        defaultPageSize={5}
                    />
                    <br /><br /><br /><br />
                </div>
            );

        }

        return null;
    }

    render() {



        return (
            <div>
                <div>
                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("../../assets/img/path4.png")}
                        />
                        <Container>
                            <Row>
                                <Col md="6" className="d-flex h-100">
                                    <Card className="card-coin">
                                        <CardHeader>

                                            <div className="h1 text-light mr-auto">
                                                Users
                                        <hr className="line-success w-50" />
                                                <br />

                                            </div>
                                        </CardHeader>

                                        <CardBody>
                                            {this.renderTable(true)}

                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6" className="d-flex h-100">

                                    <Card className="card-coin">
                                        <CardHeader>

                                            <div className="h1 text-light mr-auto">
                                                Accommodation
                                        <hr className="line-primary w-25" />
                                                <br />

                                            </div>

                                        </CardHeader>
                                        <CardBody>
                                            {this.renderTable(false)}


                                        </CardBody>
                                    </Card>
                                </Col>

                            </Row>

                        </Container>
                    </section>
                </div>

            </div>
        )
    }

}

function mapStateToProps(state) {

    return {

        users: state.auth.users,
        accommodations: state.accommodation.uncheckedAccommodation


    };

}

export default connect(mapStateToProps, actions)(UsersAndAccommodation);


