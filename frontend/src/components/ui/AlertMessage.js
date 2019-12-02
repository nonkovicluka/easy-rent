import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

function AlertMessage(props) {

    if (!props.alert) {
        return null;
    }

    return <Alert color={props.alert.color}>{props.alert.message}</Alert>
}

function mapStateToProps(state) {
    return { alert: state.formMessage.alert };
}

export default connect(mapStateToProps)(AlertMessage);
