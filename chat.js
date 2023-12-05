// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyDvE1WifXNC5z2KviQfkBjF5QComh3ONPM",
    authDomain: "kwitter-cb790.firebaseapp.com",
    projectId: "kwitter-cb790",
    storageBucket: "kwitter-cb790.appspot.com",
    messagingSenderId: "639392717445",
    appId: "1:639392717445:web:b6fc0248c0bdf05dae67ec"
  };
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });


    localStorage.setItem("user_name",  user_name);

    window.location = "chat_room.html"
}



