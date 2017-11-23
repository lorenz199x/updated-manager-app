import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export function emailChanged (text) {
    return {
        type: 'EMAIL_CHANGED',
        payload: text
    };
};

export function passwordChanged (text) {
    return {
        type: 'PASSW0RD_CHANGED',
        payload: text
    }
}

export function loginUser ({ email, password }) {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_USER'});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
        });
    };
};

export function loginUserFail (dispatch) {
    dispatch({
        type: 'LOGIN_USER_FAIL'
    });
}

export function loginUserSuccess (dispatch, user) {
    dispatch({
        type: 'LOGIN_USER_SUCCESS',
        payload: user
    });

    Actions.main();
};

export function searchInfo (name) {
        let { currentUser } = firebase.auth();

        return (dispatch) => {
            firebase.database().ref(`/USERS_AUTH/email/`)
                .once('value', snapshot => {
                    console.log(snapshot.val());
            });
        };
    };

export function validateLogin ({ email, password, uid })  {
    let { currentUser } = firebase.auth();

    return (dispatch) => {
            dispatch({ type: 'LOGIN_USER'});
            firebase.auth().signInWithEmailAndPassword(email, password)
                firebase.database().ref(`/USERS_AUTH/email/`)
                .once('value', snapshot => {
                    console.log(snapshot.val());
            }).then((result) => {
                if(result.logs === true){
                    return({
                        email: result.email
                    })
                }
            })
            .then((result) => {
                firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
                .once('value', snapshot => {
                    console.log(snapshot.val());
                })
                .then(user => loginUserSuccess(dispatch, user))
            })
            .catch((error) => {
                //.then(user => loginUserSuccess(dispatch, user))
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        firebase.database().ref(`/USERS_AUTH/${currentUser.uid}/`)
                            .push({ email, password })
                            .then(user => loginUserSuccess(dispatch, user))
                            .catch(() => loginUserFail(dispatch));
                    })
                })
            };
}
