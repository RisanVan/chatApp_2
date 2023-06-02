const firebaseConfig = {
  apiKey: "AIzaSyDzbkprlOF3M1c55gre9oRrLq06ltkxuxI",
  authDomain: "chat-app-kwitter-dab3a.firebaseapp.com",
  projectId: "chat-app-kwitter-dab3a",
  storageBucket: "chat-app-kwitter-dab3a.appspot.com",
  messagingSenderId: "769164681433",
  appId: "1:769164681433:web:415e937fee496c4350dec8"
};

firebase.initalizeApp(firebaseConfig);
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(Room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}
    
    function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room_name");
    
    window.location("index.html")
}
//End code
      } });  }); }
getData();