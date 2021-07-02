var firebaseConfig = {
    apiKey: "AIzaSyC5j5DCri1vaz9gTMqBulytvkuoW3vAc_Y",
    authDomain: "letschat-4c510.firebaseapp.com",
    databaseURL: "https://letschat-4c510-default-rtdb.firebaseio.com",
    projectId: "letschat-4c510",
    storageBucket: "letschat-4c510.appspot.com",
    messagingSenderId: "636463241348",
    appId: "1:636463241348:web:7bc05c974af8555048cad1",
    measurementId: "G-92ZR5XLVXR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }