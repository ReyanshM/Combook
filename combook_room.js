var firebaseConfig = {
      apiKey: "AIzaSyATqTw4hn06WnqP5KX5Y8ktb33pmcC7ww8",
      authDomain: "combook-52018.firebaseapp.com",
      databaseURL: "https://combook-52018-default-rtdb.firebaseio.com",
      projectId: "combook-52018",
      storageBucket: "combook-52018.appspot.com",
      messagingSenderId: "142429411578",
      appId: "1:142429411578:web:a36a00a2beb1f666cbd143"
    };
    firebase.initializeApp(firebaseConfig);
var room_name,MyDB=firebase.database();
function On_load(){
      document.getElementById("Welcome").textContent="Welcome ".concat(localStorage.getItem("User_Name"));
}
function logout(){
      window.location="index.html";
      localStorage.removeItem("User_Name");
}
function addRoom(){
      room_name=document.getElementById("room_name").value;
      MyDB.ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("Room_name", room_name);
      window.location="room.html";
}
function getData() {
      document.getElementById('trending_rooms').innerHTML="";
  
    MyDB.ref("/").once('value',function(data){
      
      console.log(data.val());
      for(room in data.val()){
        console.log(room);
        document.getElementById('trending_rooms').innerHTML+=`
        <div id="${room}" class="room">${room}</div>
        <hr>`;
      }
      
    });
}
getData();