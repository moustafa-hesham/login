function validate() {
  var user = document.getElementById('user').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var confirm = document.getElementById('confirm').value;
  var result = document.getElementById('result');

  result.setAttribute('class', 'p-2 text-center');

  if (user === '' && email === '' && pass === '' && confirm === '') {
    result.innerHTML = 'Enter Data in form';
    return false;
  } else if (user.length < 5 || user.length > 15) {
    result.innerHTML = 'Enter 5-15 character in username';
    return false;
  } else if (email.indexOf('@') == -1) {
    result.innerHTML = 'Enter valid email';
    return false;
  } else if (pass != confirm) {
    result.innerHTML = 'Passwords are not matching';
    return false;
  } else {
    return true;
  }
}
