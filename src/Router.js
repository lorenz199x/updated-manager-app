import React, { Component } from 'react';
import {Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

import Chat from './components/Chat';


export default class RouterComponent extends Component {
    render() {
        return(
            <Router>
                <Stack  key="root" hideNavBar>
                     <Scene key="auth">
                        <Scene 
                            key="login" 
                            component={LoginForm} 
                            title="Please Login"
                        />
                    </Scene>

                    <Scene key="main">
                        <Scene
                            key="employeeList"
                            onRight={() => Actions.chat()}
                            rightTitle="Add"
                            component={EmployeeList} 
                            title="Employees"
                            initial
                        />

                         <Scene 
                            key="employeeCreate"
                            component={EmployeeCreate}
                            title="Create Employee "
                        />

                        <Scene 
                            key="employeeEdit"
                            component={EmployeeEdit}
                            title="Edit Employee"
                        />

                            <Scene key='chat' title='Chat' component={Chat}/>
                    </Scene>                  
                </Stack>
            </Router>
        );
    }
}