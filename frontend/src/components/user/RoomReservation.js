import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

// reactstrap components
import {
    Button,
    Modal,
    ModalBody,
    Form,
    Row,
    Col

} from "reactstrap";

import jwt from 'jsonwebtoken';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';

class RoomReservation extends Component {

    state = {
        calendarFocused: null,
        startDate: null,
        endDate: null,
        totalPrice: 0,
        modal: null
    }

    toggle = (id) => {

        let st = null;
        if (id > 0) {
            st = "modal" + String(id);
        }

        this.setState({ modal: st });

    }


    componentWillUnmount() {
        this.props.clearMessage();
    }



    onDateSelect = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate });

        if (startDate && endDate) {

            this.calculatePrice(startDate, endDate);
        }
    }

    calculatePrice = (startDate, endDate) => {



        const pricePerNight = this.props.room.price_per_night;
        const days = endDate.diff(startDate, 'days');
        const totalPrice = pricePerNight * days;

        this.setState({ totalPrice });



    }

    handleFocusChange = calendarFocused => {
        this.setState({ calendarFocused: calendarFocused });
    }

    onSubmit = () => {

        const { user } = jwt.decode(this.props.token);

        if (this.state.startDate && this.state.endDate && this.props.room && this.state.totalPrice && user) {


            const reservation = {

                startDate: this.state.startDate._d,
                endDate: this.state.endDate._d,
                totalPrice: this.state.totalPrice,
                roomId: this.props.room.id,
                userId: user.id

            };

            this.props.reserveRoom(reservation, () => {
                this.toggle(0)
            });
        }


    }

    render() {

        if (!this.props.room) {

            return null;
        }
        else {

            return (

                <div id={this.props.room.id}>
                    <Button
                        onClick={() => this.toggle(this.props.room.id)}
                        className="btn-simple"
                        color="success"
                        disabled={(!this.props.token)}
                    >
                        Reserve
                   </Button>

                    <Modal
                        isOpen={this.state.modal === 'modal' + this.props.room.id}
                        toggle={() => this.toggle(0)}
                        backdrop={true}
                    >
                        <div className="modal-header">

                            <h2 className="modal-title mx-auto">Room reservation</h2>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                                onClick={() => this.toggle(0)}
                            ></button>
                            <i className="tim-icons icon-simple-remove" />
                        </div>
                        <br /><br />
                        <ModalBody className="mx-auto">
                            <Col className="justify-content-center" >
                                <Row>
                                    <h5 className="text-dark">Choose available dates</h5>
                                </Row>

                                <Row>
                                    <DateRangePicker
                                        onDatesChange={this.onDateSelect}
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        startDateId="startDate" // PropTypes.string.isRequired,
                                        endDateId="endDate" // PropTypes.string.isRequired,
                                        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                        onFocusChange={this.handleFocusChange}
                                    />
                                </Row>
                            </Col>
                            <br /><br />
                            <Form

                                onSubmit={this.props.handleSubmit(this.onSubmit)}
                                type="multipart/form-data">
                                <Row className="justify-content-center" >

                                    <p className="h3">
                                        Total Price:&nbsp;&nbsp;
                                                    </p>
                                    <p className="text-dark h3">
                                        {this.state.totalPrice.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} €
                                                    </p>

                                </Row>


                                <br />
                                <Row className="d-flex justify-content-center">
                                    <br />
                                   
                                </Row>
                                <Row className="d-flex justify-content-center" >

                                    <Button
                                        className="btn-round"
                                        size="lg"
                                        color="success"
                                        type="submit"
                                    >
                                        Reserve
                                   </Button>
                                </Row>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>


            );
        }
    }
}
function mapStateToProps(state) {

    return {

        token: state.auth.token

    };

}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'roomReservation'
    })
)(RoomReservation)