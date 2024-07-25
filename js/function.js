const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function validat(username, email, password, rePassword) {

    if (username.value.lengh > 3) {
        alert('The User name need to be more then three words');
        user.focus()
        username.style.outlineColor = 'red';
        return false;
    }

    if (email.value.length < 3) {
        alert("The Email name need to be more then three words");
        email.focus();
        email.style.outlineColor = 'red'

        return false;
    }

    if (!validateEmail(email.value)) {
        alert('Email is incorrect');
        email.focus();
        return false;
    }


    if (password.value.length < 3) {
        alert("The password name need to be more then three words");
        password.focus();
        password.style.outlineColor = 'red'

        return false;
    }

    if (password.value != rePassword.value) {
        alert("You should enter first password");
        rePassword.value = '';
        password.focus();
        password.style.outlineColor = 'red';

        return false;
    }




    return true;
}
function validatLogin(username, password) {

    if (username.value.lengh > 3) {
        alert('The User name need to be more then three words');
        user.focus()
        username.style.outlineColor = 'red';
        return false;
    }

    if (password.value.length < 3) {
        alert("The password name need to be more then three words");
        password.focus();
        password.style.outlineColor = 'red'

        return false;
    }

    return true;
}

export { validat, validatLogin }