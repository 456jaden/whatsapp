
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAXTngNfK-sLpbScLmF_L8qr0WRsyW-KVk",
      authDomain: "quitter-973c3.firebaseapp.com",
      databaseURL: "https://quitter-973c3-default-rtdb.firebaseio.com",
      projectId: "quitter-973c3",
      storageBucket: "quitter-973c3.appspot.com",
      messagingSenderId: "987276919215",
      appId: "1:987276919215:web:fa4cac27f941687a356f5a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name =localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({

            bird: "love birds"
          });
          localStorage.setItem("room_name",room_name);

          window.location="kwitter_page.html";
          
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name- "+Room_names);
row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
