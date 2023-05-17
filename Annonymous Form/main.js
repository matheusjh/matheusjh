function register(e){
event.preventDefault();

var email = document.getElementById("newEmail").value;
var username = document.getElementById("newUsername").value;
var pass = document.getElementById("newPassword").value;


var user = {
    email: email,
    username: username,
    password: pass,
};

var json = JSON.stringify(user);
localStorage.setItem(username, json);
console.log("User Added");


}

function login(e){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var result = document.getElementById("result").value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(username == data.username && pass == data.password){
        loadPage()
    }
    

function loadPage(){
    
    window.location="home.html";

}

}
























/* var usernameArray=[];
var passwordArray=[];

var loginBox = document.getElementById("btnLogin");
var regBox = document.getElementById("btnRegister");


function register(){
    event.preventDefault();

    var username = document.getElementById("newUsername").value;
    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value;

    
    if (email == "Username Required"){
        alert("Email required.");
        return ;
    }
    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if(usernameArray.indexOf(username) == -1){
        usernameArray.push(username);
        passwordArray.push(password);

        alert(username + "  Thanks for registration. \nTry to login Now");

        document.getElementById("newUsername").value ="";
        document.getElementById("newEmail").value="";
        document.getElementById("newPassword").value="";
        

    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var i = usernameArray.indexOf(username);

    if(usernameArray.indexOf(username) == -1){
        if (username == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(username + " yor are login Now \n welcome to our website.");

        
        document.getElementById("username").value ="";
        document.getElementById("password").value="";
        return ;
    }

} */