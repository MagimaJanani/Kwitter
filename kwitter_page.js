//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
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
    var room_name=localStorage.getItem("room_name");

    function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
 });
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data['name'];
var message=message_data['message'];
var likes=message_data['like'];

name_width_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4> ";
message_width_tag="<h4 class='message_h4'>"+message+"</h4>";
button_width_tag="<button class='btn btn-warning ' id="+firebase_message_id+" value= "+likes+" onclick='update_like(this.id)'>";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+likes+"</span> </button> <hr>";
row=name_width_tag+message_width_tag+button_width_tag+span_width_tag;
document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();
 function update_like(message_id){
likes=document.getElementById(message_id).value;
update_likes=Number(likes)+1;
console.log(message_id);
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
like:update_likes

});
 }
 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index%20(4).html";
      }
      