function submitForm() {
    var userName = document.getElementById("name").value;
    var passwordInput = document.getElementById("password");
    if (userName.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    if(passwordInput.value.length === 8){
        if ((userName === "Avinash" && passwordInput.value === "11011998")||(userName === "Jacob" && passwordInput.value === "47@Jacob")) {
            window.location.href = "welcome.html?name=" + encodeURIComponent(userName);
        } else {
            alert("Access denied. Invalid User");
        }
    }

    else {
        alert("Password must be exactly 8 characters.");
        return;
    }

}