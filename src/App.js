import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from  './store';
import firebase from 'firebase';
import Router from './Router';

export default class App extends Component {

    // componentWillMount(){
    //     let config = {
    //         apiKey: "AIzaSyBIQwERozS06nwz-F2fvfSQhpj48s4dVbE",
    //         authDomain: "manager-297dc.firebaseapp.com",
    //         databaseURL: "https://manager-297dc.firebaseio.com",
    //         projectId: "manager-297dc",
    //         storageBucket: "manager-297dc.appspot.com",
    //         messagingSenderId: "607942542826"
    //     };
    //     firebase.initializeApp(config);
    // }

    render() {
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}