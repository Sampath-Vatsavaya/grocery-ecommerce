const firebaseConfig = {
  apiKey: "AIzaSyCKbSL2LsCWjM53hFJtSE0xYdVueeYymHY",
  authDomain: "login-signup-c07f4.firebaseapp.com",
  projectId: "login-signup-c07f4",
  storageBucket: "login-signup-c07f4.appspot.com",
  messagingSenderId: "227838637283",
  appId: "1:227838637283:web:4e56b78165172597b981d6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const login = () =>
{   console.log("Hello World")
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    auth.signInWithEmailAndPassword(email,password)
    .then((res)=>
    {
      console.log(res.user)
      window.location.href = "https://sampath-vatsavaya.github.io/grocery-ecommerce/login";
      alert("You Have Succesfully Logged In ")
    })
    .catch((err)=>{
      alert(err.message)
    })

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
      window.location.href = "https://sampath-vatsavaya.github.io/grocery-ecommerce/login.html";
      alert("You Have Succesfully Signed Up, Now Login to your account")
    })
    .catch((err)=>{
      alert(err.message)
    })

}