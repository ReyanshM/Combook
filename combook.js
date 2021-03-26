var username;
function login(){
    username=document.getElementById("username").value;
    localStorage.setItem("User_Name", username);
    window.location="combook_room.html";
}