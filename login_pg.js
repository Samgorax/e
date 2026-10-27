// LOGIN PAGE JS

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload stop

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || email === "" || password === "") {
        alert("Please fill all details");
        return;
    }

    // (Demo purpose) Save user data
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    // Redirect to dashboard
    window.location.href = "landing-dashboard.html";
});
