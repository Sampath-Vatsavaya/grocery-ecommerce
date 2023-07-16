

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKbSL2LsCWjM53hFJtSE0xYdVueeYymHY",
  authDomain: "login-signup-c07f4.firebaseapp.com",
  projectId: "login-signup-c07f4",
  storageBucket: "login-signup-c07f4.appspot.com",
  messagingSenderId: "227838637283",
  appId: "1:227838637283:web:4e56b78165172597b981d6"
});

const auth = firebaseApp.auth();

const login = () =>
{   console.log("Hello World")
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if(email && password)
    {
      console.log(email,password)
      
    }

}

const signup = () =>
{   console.log("Hello World")
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    auth.createUserWithEmailAndPassword(email,password)
    .then((res)=>
    {
      console.log(res.user)
      alert("You Have Succesfully Signed Up")
    })
    .catch((err)=>{
      console.log(err.code)
      console.log(err.message)
    })

}