import { validat } from "./function.js";

const form = document.getElementById('form');
const username = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re-password');
const button = document.getElementById('form');



form && form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isValid = validat(username, email, password, rePassword);

    if (!isValid) {
        return;
    }

    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
    }

    button.innerHTML = 'Pending...';
    button.setAttribute('disabled', true)

    fetch(" https://auth-rg69.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if (data.message == 'Failed! Username is already in use!') {
                alert(data.message);
                username.focus();
            }
            if (data.message == 'Failed! Email is already in use!') {
                alert(data.message);
                email.focus();
            }
            if (data.message == 'User registered successfully!') {
                let url = window.location.href.split('/html')[0];
                window.location.assign(`${url}/html/login.html`)
            }
        })
        .catch(err => {
            console.log(err);
        })
        .finally(function () {
            button.innerHTML = 'Register';
            button.removeAttribute('disabled')
        })

})