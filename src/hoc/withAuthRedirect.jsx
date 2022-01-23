import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) {
            return (
                <Navigate to="/login" />
            );
        }
        return <Component {...props} />
    }
    let mapStateToPropsFromRediirect = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }
    let connectedAuthRedirectComponent = connect(mapStateToPropsFromRediirect)(RedirectComponent);
    return connectedAuthRedirectComponent;
}