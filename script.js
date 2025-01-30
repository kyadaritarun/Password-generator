       //Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

       //Event Listeners
document.getElementById("generate-btn").addEventListener("click", generatePassword);
document.getElementById("copy-btn").addEventListener("click", copyPassword);                   
document.getElementById("length").addEventListener("input", updateLength);           // When the button is clicked, it calls the generatePassword function.

        //Function to update displayed password length when slider moves
    function updateLength() {
    document.getElementById("length-value").innerText = this.value;       
}

        //Function to generate a random password
    function generatePassword() {
    let length = document.getElementById("length").value;                        // user lenght =10
    let includeUppercase = document.getElementById("uppercase").checked;
    let includeLowercase = document.getElementById("lowercase").checked;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;

        // Stores allowed characters for the password
    let characterPool = "";                                                      
    if (includeUppercase) characterPool += uppercaseChars;                        
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeNumbers) characterPool += numberChars;                            //upcase is true then it will add 
    if (includeSymbols) characterPool += symbolChars;


        // Alert if no option is selected
    if (characterPool === "") {
        alert("Select at least one character type!");        
        return;
    }
        //This creates an empty string to store the generated password.
    let password = "";                                         
    for (let i = 0; i < length; i++) {                                           //Loops means it adds that many characters to the password.
        let randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    // Display generated password
    document.getElementById("password").value = password;             
}

function copyPassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.value === "") {
        alert("Generate a password first!");
        return;
    }
    passwordField.select();
    document.execCommand("copy");   // Copies the password
    alert("Password successfully copied ");
}