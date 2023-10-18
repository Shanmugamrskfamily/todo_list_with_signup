document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Get user information from local storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    // Check if the entered credentials match the saved credentials
    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        // Redirect to the to-do list page on successful login
        window.location.href = "todo.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
