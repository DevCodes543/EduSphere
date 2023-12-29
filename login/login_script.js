
function login() {
    let pop = document.getElementById("login_page");
    pop.style.visibility = "visible";
}
function login_reverse() {
    let pop = document.getElementById("login_page");
    pop.style.visibility = "hidden";
}
window.onload = login();




// validate 
function validate(){
    // debugger;
    let name=document.getElementById('name').value;
    console.log(name);
    console.log("name")
    // alert(name);
    if(name==""){
        alert("enter details");
    }
}