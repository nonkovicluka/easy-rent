import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken';
/**
 * HOC that Handles whether or not the user is allowed to see the page.
 * @param {array} allowedRoles - user roles that are allowed to see the page.
 * @returns {Component}
 */
export default function Authorization(allowedRoles) {
    return WrappedComponent => {
        class WithAuthorization extends Component {

            render() {
                const { token } = this.props;

                if (!token && !allowedRoles.includes('Unsigned')) {
                    return <Redirect to='/login' />;
                }
                if(!token && allowedRoles.includes('Unsigned')) {
                    return <WrappedComponent {...this.props} />;
                }

                const { user } = jwt.decode(token);
                if (allowedRoles.includes(user.role.name)) {
                    return <WrappedComponent {...this.props} />;
                } else {
                    return <Redirect to='/' />;
                }
            }
        };
        return connect(state => {

            return { token: state.auth.token };
        })(WithAuthorization);
    };
};