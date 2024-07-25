const wrapper = document.getElementById('wrapper');
const username = document.getElementById('username');
const email = document.getElementById('email');
const logeOut = document.getElementById('loge__out');


document.addEventListener('DOMContentLoaded', function () {

    let token = localStorage.getItem('token');

    if (!token) {
        let url = window.location.href.split('/index')[0];
        window.location.assign(`${url}/html/login.html`)
    }

    let user = JSON.parse(localStorage.getItem('user'))
    username.innerHTML = user.username.toUpperCase()[0] + slice(1);
    email.innerHTML = user.email;


})