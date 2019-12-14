import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classnames from "classnames";
import jwt from 'jsonwebtoken';

import * as actions from '../../actions';

// reactstrap components
import {
    Button,
    Modal,
    ModalBody,
    Form,
    Row,
    Col,
    InputGroup,
    Input

} from "reactstrap";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";


class AccommodationRate extends Component {



    state = {
        modal: false,
        textValue: '5',
    };

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal,
            textValue: '5'
        });

    }




    componentWillUnmount() {
        this.props.clearMessage();
    }


    onSlide = (render, handle, value, un, percent) => {
        this.setState({
            textValue: value[0]

        });
    };

    onSubmit = (formProps) => {

        const fd = new FormData();
        fd.append('grade', this.state.textValue)
        fd.append('comment', formProps.comment)

        const { user } = jwt.decode(this.props.token);
        fd.append('userId', user.id)

        fd.append('accommodationId', this.props.match.params.id)

        this.props.rateAccommodation(fd, () => {
            this.toggleModal();
        });


    }

    render() {

        const { textValue } = this.state;

        return (

            <div>
                <Button
                    onClick={this.toggleModal}
                    className="btn-round btn-simple"
                    color="success"
                    size="lg"
                    disabled={!this.props.token}
                >
                    Rate
                   </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleModal}
                    backdrop={true}
                >
                    <div className="modal-header">

                        <h2 className="modal-title mx-auto">Review accommodation</h2>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                            onClick={this.toggleModal}
                        ></button>
                        <i className="tim-icons icon-simple-remove" />
                    </div>
                    <br /><br />
                    <ModalBody className="mx-auto">



                        <Form
                            onSubmit={this.props.handleSubmit(this.onSubmit)}>

                            <label className="font-weight-bold">Rating</label>
                            <br />
                            <Row className="justify-content-center">
                                <h2 className="text-dark font-weight-bold">
                                    {textValue}
                                </h2>
                            </Row>

                            <Nouislider
                                range={{ min: 0, max: 10 }}
                                start={5}
                                step={1}
                                connect={[true, false]}
                                onSlide={this.onSlide}
                            />
                            <br />
                            <br />
                            <Row>
                                <Col md="12">
                                    <label className="font-weight-bold">Comment</label>
                                    <br />
                                    <InputGroup className={classnames({
                                        "input-group-focus": this.state.commentFocus
                                    })}>

                                        <Input
                                            className="text-dark"
                                            tag={Field}
                                            component="textarea"
                                            name="comment"
                                            bsSize="lg"
                                            placeholder="Write about your experience here..."
                                            type="textarea"
                                            onFocus={e =>
                                                this.setState({ commentFocus: true })
                                            }
                                            onBlur={e =>
                                                this.setState({ commentFocus: false })
                                            }
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center" >

                                <Button
                                    className="btn-round"
                                    size="lg"
                                    color="success"
                                    type="submit"
                                >
                                    Submit
                                   </Button>
                            </Row>
                            <br />
                            <Row>
                                <h5 className="text-muted font-weight-bold" >Note:&nbsp;</h5>
                                <h5 className="text-muted font-italic">You can only rate after your reservation ends.</h5>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>


        );
    }
}

function mapStateToProps(state) {

    return {

        token: state.auth.token,
        accommodation: state.accommodation.accommodation

    };

}

export default compose(
    withRouter,
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'accommodationRate'
    })
)(AccommodationRate)