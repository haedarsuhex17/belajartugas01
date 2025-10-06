function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Akun berhasil dibuat! Silakan login.");
    window.location.href = "index.html";
  } else {
    alert("Isi semua field!");
  }
}

function login() {
  const inputUsername = document.getElementById("login-username").value;
  const inputPassword = document.getElementById("login-password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    inputUsername === storedUser.username &&
    inputPassword === storedUser.password
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Auto redirect if not logged in
if (window.location.pathname.includes("dashboard.html")) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    alert("Silakan login dulu.");
    window.location.href = "index.html";
  } else {
    const user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("welcome-text").innerText =
      "Halo, " + user.username + "!";
  }
}
