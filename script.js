
// Lyssna efter klickhändelser på knappen med id "loginButton"
document.getElementById("loginButton").addEventListener("click", function(event) {
     // Hämtar lösenordet från input-elementet med id "psw"
    var password = document.getElementById("psw").value;
    var minLength = 8; // Minsta antal tecken för lösenordet

      // Om lösenordet är kortare än minLength
    if (password.length < minLength) {
        // Om lösenordet är för kort, förhindra formuläret från att skickas och visa felmeddelande
        event.preventDefault();
        document.getElementById("passwordError").textContent = "Lösenordet måste vara minst " + minLength + " tecken långt.";
    } else {
        // Om lösenordet är tillräckligt långt, ta bort eventuella tidigare felmeddelanden och ändra border-färgen
        document.getElementById("passwordError").textContent = "";
    }
});

