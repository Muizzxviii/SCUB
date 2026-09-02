const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const account =
            document.getElementById("accountNumber").value.trim();

        const password =
            document.getElementById("password").value;

        const error =
            document.getElementById("errorMessage");

        if (
            account === "8730152400" &&
            password === "0099"
        ) {

            sessionStorage.setItem(
                "demoLoggedIn",
                "true"
            );

            window.location.href = "index.html";

        } else {

            error.textContent =
                "Incorrect account number or password.";

        }

    });

}

document.querySelector('.profile').innerText = "M"

const balance = document.getElementById("balance");
const eyeButton = document.getElementById("eyeButton");

if (balance && eyeButton) {

    eyeButton.addEventListener("click", function () {

        if (balance.textContent.trim() === "$1,952,636.75") {

            balance.textContent = "••••••••";

        } else {

            balance.textContent = "$1,952,636.75";

        }

    });

}

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        sessionStorage.removeItem(
            "demoLoggedIn"
        );

        window.location.href =
            "index.html";

    });

}
