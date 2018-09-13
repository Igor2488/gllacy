var userNavLinkSearch = document.querySelector('.user_nav_link_search');
var userNavLinkLogin = document.querySelector('.user_nav_link_login');
var popUpSearchInput = document.querySelector('#search_input');
var popUpLogin = document.querySelector('.pop-up_login');
var popUpLoginForm = popUpLogin.querySelector('.login_form');
var loginEmailInput = popUpLoginForm.querySelector('#login_email_input');
var loginPasswordInput = popUpLoginForm.querySelector('#login_password_input');
var loginSubmitBtn = popUpLoginForm.querySelector('.login_form_btn');
var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('email');
} catch (err) {
	isStorageSupport = false;
}

userNavLinkLogin.addEventListener('mouseover', function(){
	if(isStorageSupport && storage){
		loginEmailInput.value = storage;
		loginPasswordInput.focus();
	}
	else{
		loginEmailInput.focus();
	}
});

loginSubmitBtn.addEventListener('click', function(evt){
	if(isStorageSupport){
		localStorage.setItem('email', loginEmailInput.value);
	}
});

userNavLinkSearch.addEventListener('mouseover', function(){
	popUpSearchInput.focus();
});