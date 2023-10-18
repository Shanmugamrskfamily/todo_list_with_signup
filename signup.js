const currentYear = new Date().getFullYear();
      document.getElementById("copyright-year").textContent = currentYear;

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.alert("Signup Success!!!")
    window.location.href = "login.html";
});