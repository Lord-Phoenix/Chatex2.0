const firebaseConfig = {
    apiKey: "AIzaSyA_Uo1gzSUConBsXe0aJqsVwTumNUQS5FU",
    authDomain: "chatex-fd102.firebaseapp.com",
    projectId: "chatex-fd102",
    storageBucket: "chatex-fd102.appspot.com",
    messagingSenderId: "874747655229",
    appId: "1:874747655229:web:d908403e4c06cba383e654"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user = document.getElementById("userName").value;
    localStorage.setItem("userName", user);
    window.location= "chatex_room.html";
}
// good evening ma'am, apparently, the window.location is not working, can you please help me in the next class