// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKJMGXAz84l8tndFy4mz9n_9GpJWhay2Y",
    authDomain: "kwitter-project-ab6ff.firebaseapp.com",
    projectId: "kwitter-project-ab6ff",
    storageBucket: "kwitter-project-ab6ff.appspot.com",
    messagingSenderId: "730956970846",
    appId: "1:730956970846:web:0b01e824030255d9c5edcf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 user_name = localStorage.getItem("username");
 document.getElementById("user_name").innerHTML = " Welcome " + user_name+"!";

 functionadd_room() 
 {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room name",room_name);
    window.location="kwitter_page.html";
 }

 function getData() 