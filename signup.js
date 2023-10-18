document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Store user information (in a real app, send this data to the server)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to the login page
    window.location.href = "login.html";
});
