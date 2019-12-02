import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


import {
    Container,
    Col,
    Row,
    Button,
    UncontrolledTooltip
} from "reactstrap";

import * as actions from '../../actions'

class MyRooms extends Component {

    componentDidMount() {

        const id = this.props.match.params.id;
        this.props.getRooms(id, true);


    }


    onClickEdit = (accommodationId, roomId) => {

        this.props.history.push(`/accommodation/${accommodationId}/room/${roomId}/edit`);

    }

    onDeleteClick = (props) => {

        this.props.deleteRoom(props.original.id);

    }

    renderTable() {


        const columns = [
            {
                Header: '#',
                accessor: 'id',
                maxWidth: 40
            }, {
                Header: 'Name',
                accessor: 'name',
                maxWidth: 190
            }, {
                Header: 'Description',
                accessor: 'description'
            }, {
                Header: 'Beds',
                accessor: 'bed_count',
                maxWidth: 60,
                Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
            }, {
                Header: 'Price per night',
                accessor: 'price_per_night',
                maxWidth: 160,
                Cell: row => <div style={{ textAlign: "center" }}>{row.value}{' €'}</div>
            }, {
                Header: 'Actions',
                maxWidth: 90,
                Cell: props => <span>

                    <Button
                        onClick={() => this.onClickEdit(props.original.accommodation_id, props.original.id)}
                        className="btn-icon btn-round btn-simple"
                        id={`edit-${props.original.id}`}
                        color="success" size="sm" type="button">
                        <i className="fa fa-edit"></i>
                    </Button>
                    {` `}
                    <UncontrolledTooltip placement="top" target={`edit-${props.original.id}`} delay={100}>
                        Edit accommodation
            </UncontrolledTooltip>
                    <Button
                        onClick={() => this.onDeleteClick(props)}
                        className="btn-icon btn-round btn-simple"
                        id={`delete-${props.original.id}`}
                        color="danger" size="sm" type="button">
                        <i className="fa fa-times" />
                    </Button>{` `}
                    <UncontrolledTooltip placement="top" target={`delete-${props.original.id}`} delay={100}>
                        Delete accommodation
            </UncontrolledTooltip>
                </span>
            }

        ];

        const tableStyle = {
            color: '#ced4da',
            padding: '1rem',
            verticalAlign: 'top'
        };


        return (
            <div>
                <ReactTable
                    style={tableStyle}
                    className="-striped -highlight"
                    data={this.props.rooms}
                    columns={columns}
                    defaultPageSize={5}
                />
                <br /><br /><br /><br />
            </div>
        );

    }

    render() {
        if (this.props.rooms && this.props.rooms.length > 0) {


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
                                    <Col md="12" className="d-flex h-100">
                                        <div className="h1 text-light mr-auto">
                                            {this.props.rooms[0].accommodation.name}
                                            &nbsp;rooms
                                        <hr className="line-success" />
                                            <br />

                                        </div>
                                    </Col>

                                </Row>

                                {this.renderTable()}
                            </Container>
                        </section>
                    </div>

                </div>
            )

        }


        return (
            <div>
                <br /><br />
                <br /><br />
                <div>
                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("../../assets/img/path4.png")}
                        />
                        <Container>
                            <Row className="d-flex">
                                <p className="h1 text-white mx-auto pb-3">No rooms registered yet...</p>
                            </Row>

                            <Row className="d-flex">
                                <Link className="mx-auto" to={`/accommodation/${this.props.match.params.id}/room/register`} >
                                    <Button
                                        className="btn-simple"
                                        color="success"
                                    >
                                        Add room
                                 </Button>
                                </Link>
                            </Row>
                        </Container>
                    </section>
                </div>
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
            </div>

        );

    }
}

function mapStateToProps(state) {

    return {

        rooms: state.room.rooms


    };

}

export default connect(mapStateToProps, actions)(MyRooms);

