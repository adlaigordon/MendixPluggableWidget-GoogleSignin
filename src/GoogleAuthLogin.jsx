import { Component, createElement } from "react";
import GoogleLogin from 'react-google-login';

import "./ui/GoogleAuthLogin.css";

export default class GoogleAuthLogin extends Component {
    constructor(props) {
        super(props);

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    render() {
        return (
            <GoogleLogin
                clientId={this.props.googleauthClientId}
                buttonText={this.props.googleauthButtonText}
                cookiePolicy={'single_host_origin'}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        )
    }

    responseGoogle(response) {
        this.props.googleauthResponse.setTextValue(JSON.stringify(response));
        this.props.googleauthHandler.execute();
    }

}