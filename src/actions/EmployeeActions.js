import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export function employeeUpdate ({ prop, value }) {
    return {
        type: 'EMPLOYEE_UPDATE',
        payload: { prop, value }
    };
};

export function employeeCreate ({ name, phone, shift }) {
    let { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: 'EMPLOYEE_CREATE' })
                Actions.main({ type: 'reset' })
        });
    };
};

export function employeesFetch () {
    let { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: 'EMPLOYEES_FETCH_SUCCESS', payload: snapshot.val()});
        });
    };
};

export function employeeSave ({ name, phone, shift, uid }) {
    let { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: 'EMPLOYEE_SAVE_SUCCESS' })
                Actions.main({ type: 'reset' });
        });
    };
};

export function employeeDelete ({ uid }) {
    let { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.main({ type: 'reset' });
            })
    };
};