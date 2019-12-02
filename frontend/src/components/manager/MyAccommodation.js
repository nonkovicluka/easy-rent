import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


import {
    Container,
    Col,
    Row,
    Button,
    UncontrolledTooltip,
    Input
} from "reactstrap";

import * as actions from '../../actions'

class MyAccommodation extends Component {

    componentDidMount() {

        const { user } = jwt.decode(this.props.token);
        this.props.searchAccommodation({ ownerId: user.id });
        this.props.getAccommodationTypes();


    }
    renderEditable = (cellInfo) => {

        return (
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.props.myAccommodation];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.props.quickEdit(data[cellInfo.index]);
                }}
                dangerouslySetInnerHTML={{
                    __html: this.props.myAccommodation[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    onTermSearch = (event) => {

        const { user } = jwt.decode(this.props.token);
        this.props.searchAccommodation({ term: event.target.value, ownerId: user.id });
    }

    onTypeSearch = (event) => {
        const { user } = jwt.decode(this.props.token);
        this.props.searchAccommodation({ type: event.target.value, ownerId: user.id });

    }

    onClickEdit = (id) => {

        this.props.history.push(`/accommodation/${id}/edit`);

    }

    onDeleteClick = (props) => {

        this.props.deleteAccommodation(props.original.id);

    }

    renderTable() {
        const { myAccommodation } = this.props;



        const columns = [
            {
                Header: '#',
                accessor: 'id',
                maxWidth: 40
            }, {
                Header: 'Name',
                accessor: 'name',
                maxWidth: 180,
                Cell: this.renderEditable
            }, {
                Header: 'Description',
                accessor: 'description',
                maxWidth: 300,
                Cell: this.renderEditable
            }, {
                Header: 'Address',
                accessor: 'address'
            }, {
                Header: 'Type',
                accessor: 'accommodation_type.name',
                maxWidth: 100
            }, {
                Header: 'Actions',
                Cell: props => <span>
                    <Link to={`/accommodation/${props.original.id}/my-rooms`} >
                        <Button id={`rooms-${props.original.id}`} className="btn-icon btn-round btn-simple" color="info" size="sm" type="button">
                            <i className="fas fa-door-closed"></i>
                        </Button>
                    </Link>{` `}
                    <UncontrolledTooltip placement="top" target={`rooms-${props.original.id}`} delay={100}>
                        View rooms
                    </UncontrolledTooltip>

                    <Link to={`/accommodation/${props.original.id}/room/register`} >
                        <Button id={`add-${props.original.id}`} className="btn-icon btn-round btn-simple" color="warning" size="sm" type="button">
                            <i className="fas fa-bed"></i>
                        </Button>
                    </Link>{` `}
                    <UncontrolledTooltip placement="top" target={`add-${props.original.id}`} delay={100}>
                        Add room
                    </UncontrolledTooltip>

                    <Button onClick={() => this.onClickEdit(props.original.id)} className="btn-icon btn-round btn-simple" id={`edit-${props.original.id}`} color="success" size="sm" type="button">
                        <i className="fa fa-edit"></i>
                    </Button>
                    {` `}
                    <UncontrolledTooltip placement="top" target={`edit-${props.original.id}`} delay={100}>
                        Edit accommodation
                    </UncontrolledTooltip>
                    <Button onClick={() => this.onDeleteClick(props)} className="btn-icon btn-round btn-simple" id={`delete-${props.original.id}`} color="danger" size="sm" type="button">
                        <i className="fa fa-times" />
                    </Button>{` `}
                    <UncontrolledTooltip placement="top" target={`delete-${props.original.id}`} delay={100}>
                        Delete accommodation
            </UncontrolledTooltip></span>,
                maxWidth: 160
            }

        ];

        const tableStyle = {
            color: '#ced4da',
            padding: '1rem',
            verticalAlign: 'top'
        };


        if (myAccommodation) {

            return (
                <div>


                    <ReactTable
                        style={tableStyle}
                        className="-striped -highlight"
                        data={myAccommodation}
                        columns={columns}
                        defaultPageSize={5}
                    />
                    <br /><br /><br /><br />
                </div>
            );
        }


        return null
    }

    render() {

        return (
            <div>
                <div>
                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("../../assets/img/path2.png")}
                        />
                        <Container>
                            <Row>
                                <Col md="12" className="d-flex h-100">
                                    <div className="h1 text-light mr-auto">My accommodation
                                             <hr className="line-success" />
                                        <br />

                                    </div>
                                    <Col md="6">
                                        <Row className="justify-content-end align-self-start">
                                            <Col md="5">
                                                <Input
                                                    onChange={this.onTypeSearch}
                                                    type="select"
                                                    name="accommodationType" >
                                                    <option value=''>Select type</option>
                                                    {this.props.accommodationTypes.map(type => <option value={type.id} key={type.id}>{type.name}</option>)}
                                                </Input>
                                            </Col>
                                            <Col md="7" className="justify-content-end align-self-end">
                                                <Input
                                                    onChange={this.onTermSearch}

                                                    placeholder="Search"
                                                    type="text" />
                                            </Col>
                                        </Row>


                                    </Col>

                                </Col>

                            </Row>

                            {this.renderTable()}
                        </Container>
                    </section>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {

    return {

        token: state.auth.token,
        myAccommodation: state.accommodation.myAccommodation,
        accommodationTypes: state.accommodation.accommodationTypes,


    };

}

export default connect(mapStateToProps, actions)(MyAccommodation);

