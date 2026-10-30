// ===============================
// SMART LIBRARY LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const role = document.getElementById("role").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check all fields
        if (role === "" || email === "" || password === "") {
            alert("Please fill in all the fields.");
            return;
        }

        // =========================
        // STUDENT LOGIN
        // =========================
        if (role === "student") {

            alert("Student login successful! Welcome to Smart Library.");

            window.location.href = "student-dashboard.html";

        }

        // =========================
        // ADMIN LOGIN
        // =========================
        else if (role === "admin") {

            alert("Admin login successful! Welcome to the Library Dashboard.");

            window.location.href = "admin-dashboard.html";

        }

    });

}


// ===============================
// SHOW / HIDE PASSWORD
// ===============================

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", function() {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.textContent = "🙈";

        } else {

            passwordInput.type = "password";
            togglePassword.textContent = "👁️";

        }

    });

}