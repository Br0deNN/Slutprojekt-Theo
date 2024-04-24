

document.getElementById("loginButton").addEventListener("click", function(event) {
    var password = document.getElementById("psw").value;
    var minLength = 8; // Minsta antal tecken för lösenordet

    if (password.length < minLength) {
        // Om lösenordet är för kort, förhindra formuläret från att skickas och visa felmeddelande
        event.preventDefault();
        document.getElementById("passwordError").textContent = "Lösenordet måste vara minst " + minLength + " tecken långt.";
        document.getElementById("psw").classList.remove("valid-password");
        document.getElementById("psw").classList.add("invalid-password");
    } else {
        // Om lösenordet är tillräckligt långt, ta bort eventuella tidigare felmeddelanden och ändra border-färgen
        document.getElementById("passwordError").textContent = "";
        document.getElementById("psw").classList.remove("invalid-password");
        document.getElementById("psw").classList.add("valid-password");
    }
});



document.getElementById("loginButton").addEventListener("click", function(event) {
    var password = document.getElementById("email").value;
    var minLength = 8; // Minsta antal tecken för lösenordet

    if (password.length < minLength) {
        // Om lösenordet är för kort, förhindra formuläret från att skickas och visa felmeddelande
        event.preventDefault();
        document.getElementById("emailError").textContent = "Du måste skriva det i rätt format.";
        document.getElementById("email").classList.remove("valid-password");
        document.getElementById("email").classList.add("invalid-password");
    } else {
        // Om lösenordet är tillräckligt långt, ta bort eventuella tidigare felmeddelanden och ändra border-färgen
        document.getElementById("emailError").textContent = "";
        document.getElementById("email").classList.remove("invalid-email");
        document.getElementById("email").classList.add("valid-email");
    }
});

