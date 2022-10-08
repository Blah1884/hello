
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA0tbjEOoAqA-UGIY7DSIFDTJqabd5MQgE",
      authDomain: "kwitter-project-5c9d7.firebaseapp.com",
      projectId: "kwitter-project-5c9d7",
      storageBucket: "kwitter-project-5c9d7.appspot.com",
      messagingSenderId: "319483290423",
      appId: "1:319483290423:web:69be63fb1db3805d73f0b2"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
