
const login_btn = document.getElementById("login-btn");
login_btn.onclick = () => {
    LogIn();
};

const userFromLS = JSON.parse(localStorage.getItem("user"));
console.log(userFromLS);

const LogIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == userFromLS.email && password == userFromLS.password) {
        alert("Log in Successfully! ✅");
        window.location.href = "user.html";
    } else {
        alert("Wrong Credentials ⛔");
    }
};