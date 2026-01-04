function login(event) {
    event.preventDefault();

    const correctEmail = "mmizan24@gmail.com";
    const correctPassword = "bip1234";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === correctEmail && password === correctPassword) {
        // Save login state
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        error.textContent = "Invalid email or password!";
    }
}

// Logout function
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
