import { validatLogin } from "./function.js";

const form = document.getElementById('form');
const username = document.getElementById('user');
const password = document.getElementById('password');
const button = document.getElementById('form');

form && form.addEventListener('submit', function (event) {
    event.preventDefault();
    const isVali = validatLogin(username, password);
    if (!isVali) {
        return;
    }

    const user = {
        username: username.value,
        password: password.value
    }

    button.innerHTML = 'Pending...';
    button.setAttribute('disabled', true)

    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('token', data.accessToken)

                let url = window.location.href.split('/html')[0];
                window.location.assign(`${url}/index.html`)
            }
            if (data.message == 'User Not found.') {
                alert(data.message)
                username.focus();
            }
            if (data.message == 'Invalid Password!') {
                alert(data.message)
                password.focus()

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