import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

const mapStateToProps = ({ employeeForm }) => {
    let { name, phone, shift } = employeeForm;
    return{ name, phone, shift };
};


class EmployeeCreate extends Component {

    onButtonPress(){
        let { name, phone, shift } = this.props
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>  
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ employeeUpdate, employeeCreate }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(EmployeeCreate)