import React from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import Pusher from 'pusher-js';
import PagesNavbar from './ui/PagesNavbar';
import Footer from './ui/Footer';
import AlertMessage from './ui/AlertMessage';
import { Col, Container } from "reactstrap";
import * as actions from '../actions';


function App(props) {

    if (props.token) {
        const { user } = jwt.decode(props.token);

        if (user.role.name === "Admin") {

            var pusher = new Pusher('b6209bdfcd8d7c8b6787', {
                cluster: 'eu',
                forceTLS: true
            });

            var channel = pusher.subscribe('admin-channel');
            channel.bind('accommodation-register', function (data) {
                props.dispatch({
                    type: 'form_message', payload: {
                        message: data.message,
                        color: 'info',
                        visibility: true
                    }
                });


            });
        }

        if (user.role.name === "Manager") {

            var pusher = new Pusher('b6209bdfcd8d7c8b6787', {
                cluster: 'eu',
                forceTLS: true
            });

            var channel = pusher.subscribe('manager-channel-' + user.id);
            channel.bind('accommodation-approval', function (data) {
                props.dispatch({
                    type: 'form_message', payload: {
                        message: data.message,
                        color: 'primary',
                        visibility: true
                    }
                });
            });
        }
    }


    return (
        <div>
            <PagesNavbar />
            <br /><br />
            <br /><br />
            <Container>
                <Col md="3" className="d-flex ml-auto" >

                    <AlertMessage />

                </Col>
            </Container>

            {props.children}
            <Footer />
        </div>
    )
}



export default connect(null)(App);
