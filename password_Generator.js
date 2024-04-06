function generatePassword() {
    const length = 12;
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?/><;+_-~`!#$%^&*(){}[]";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        password += letters[randomIndex]
    }
    const passwordElement = document.getElementById('password');
    passwordElement.textContent = password;
    document.getElementById('password').innerText = password;
}

document.getElementById('copyBtn').addEventListener('click', function () {
    let passwordText = document.getElementById('password').innerText;
    let textarea = document.createElement('textarea');
    textarea.value = passwordText;

    // Set the textarea to be invisible
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;

    // Append the textarea to the HTML body
    document.body.appendChild(textarea);

    // Select and copy the text inside the textarea
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textarea);

    // Alert the user that the text has been copied
    alert('Password copied to clipboard: ' + passwordText);
});
