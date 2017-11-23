import firebase from 'firebase';

export default class LogsValidate {

    static searchInfo (name) {
        let { currentUser } = firebase.auth();

        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/employees/${name}`)
                .on('value', snapshot => {
            });
        };
    };

}


// var ref = new Firebase('fire-base-url');
// ref.orderByChild("userkey").equalTo("11112").once("value", function(snapshot) {
//     console.log(snapshot.key);
// });

