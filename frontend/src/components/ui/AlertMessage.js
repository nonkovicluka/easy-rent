import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import * as actions from '../../actions';


function AlertMessage(props) {


    const onDismiss = () => {

        props.clearMessage();

    }

    if (!props.alert) {
        return null;
    }

    return (
        <Alert color={props.alert.color} isOpen={props.visibility} toggle={onDismiss}>
            {props.alert.message}
        </Alert>
    );
}

function mapStateToProps(state) {
    return { alert: state.formMessage.alert };
}

export default connect(mapStateToProps, actions)(AlertMessage);
