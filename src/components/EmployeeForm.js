import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input, Button } from './common';

const mapStateToProps = ({ employeeForm }) => {
    let { name, phone, shift } = employeeForm;
    return{ name, phone, shift };
};

class EmployeeForm extends Component {
    render() {
        return(
            <View>
                <CardSection>  
                    <Input
                        label="Name"
                        placeholder="Name"
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>  
                    <Input
                        label="Phone"
                        placeholder="0000-000-0000"
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column'}}>
                    <CardSection>
                        <Text style={styles.pickerStyles}>Shift:</Text>
                    </CardSection>
                    
                    <Picker
                        style={{ flex: 1, alignItems: 'center'}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerStyles: {
        fontSize: 22,
        paddingLeft: 20
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ employeeUpdate }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EmployeeForm)
