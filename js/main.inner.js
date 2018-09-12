var popUpLogin = document.querySelector('.pop-up_login');
var userNavLinkLogin = document.querySelector('.user_nav_link_login');
var loginEmailInput = popUpLogin.querySelector('#login_email_input');

var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('userNavLinkLogin');
} catch (err) {
	isStorageSupport = false;
}

userNavLinkLogin.addEventListener('mouseover', function(){
	// var loginEmailInput = popUpLogin.querySelector('#login_email_input');
	loginEmailInput.focus();
})
// userNavLinkLogin.addEventListener('focus', function(){
// 	// var loginEmailInput = popUpLogin.querySelector('#login_email_input');
// 	loginEmailInput.focus();
// })
