const text = document.querySelector('.password-box input');
const img = document.querySelector('.password-box img');
const range = document.querySelector('.range input');
const num = document.querySelector('.range span');
const btn = document.querySelector('.container button');

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,@";

const generatePassword = () => {
    let newPassword = '';
    for (let i = 0; i < range.value; i++) {
        let randomNo = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNo];
    }
    console.log(newPassword);
    text.value = newPassword;
}

range.addEventListener('input', () => {
    num.innerHTML = range.value;
    img.src = 'copy.png';
});

btn.addEventListener('click',() =>{
    generatePassword();
    img.src = 'copy.png';
});

img.src = 'copy.png';
img.addEventListener("click", () => {
    navigator.clipboard.writeText(text.value);
    img.src = 'copied.png';
});
