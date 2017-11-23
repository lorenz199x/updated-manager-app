import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { emailChanged, passwordChanged, loginUser, validateLogin } from '../actions';
import { Card, Input, Button, CardSection, Spinner } from './common';


const mapStateToProps = ({ auth }) => {
    let { email, password, error, loading } = auth;
    return{ email, password, error, loading };
};

 class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        let { email, password } = this.props;
        this.props.validateLogin({ email, password });
    }

    renderButton(){
        if(this.props.loading) {
           return <Spinner size="large" />;
        }
        
        return(
            <Button onPress={this.onButtonPress.bind(this)} > 
                Login
            </Button>
        );
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ emailChanged, passwordChanged, loginUser, validateLogin }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);