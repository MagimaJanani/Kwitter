
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 const firebaseConfig = {
      apiKey: "AIzaSyAWrP090dbFygxNEm412jOEYuopSXg8wNw",
      authDomain: "kwitter-app-88ab8.firebaseapp.com",
      databaseURL: "https://kwitter-app-88ab8.firebaseio.com",
      projectId: "kwitter-app-88ab8",
      storageBucket: "kwitter-app-88ab8.appspot.com",
      messagingSenderId: "1006011785192",
      appId: "1:1006011785192:web:1c2566b1728a290a278e5d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome : "+ user_name+"!";
    function addroom() {
  var room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redircttoroomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;
//End code
      });});}
getData();
function redircttoroomname(name){
  console.log("name");
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index%20(4).html";
}
