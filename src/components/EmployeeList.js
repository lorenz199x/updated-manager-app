import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions'
import ListItem from './ListItem';

const mapStateToProps = state => {
    let employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ employeesFetch }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(EmployeeList);