var map;
var image = 'img/pin_icon.png';
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 59.938743, lng: 30.323058},
		zoom: 17
	}),

	marker = new google.maps.Marker({
		position: {lat: 59.938743, lng: 30.323058},
		map: map,
		icon: image
	})
}

var openFeedbackModalBtn = document.querySelector('.contacts_btn');
var closeFeedbackModalBtn = document.querySelector('.close_btn');
var feedbackModal = document.querySelector('.feedback_modal');
var modalOverlay = document.querySelector('.modal_overlay');
var userNavLinkLogin = document.querySelector('.user_nav_link_login');
var popUpLogin = document.querySelector('.pop-up_login');
var popUpLoginForm = popUpLogin.querySelector('.login_form');
var loginEmailInput = popUpLoginForm.querySelector('#login_email_input');
var loginPasswordInput = popUpLoginForm.querySelector('#login_password_input');
var loginSubmitBtn = popUpLoginForm.querySelector('.login_form_btn');
var feedbackForm = document.querySelector('.feedback_form');
var feedbacFormSubmitBtn = feedbackModal.querySelector('.feedback_btn')
var feedbackFormNameInput = feedbackModal.querySelector('#feedback_name_input');
var feedbackFormEmailInput = feedbackModal.querySelector('#feedback_email_input');
var feedbackFormMessageInput = feedbackModal.querySelector('#feedback_message');

var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('email');
} catch (err) {
	isStorageSupport = false;
}

openFeedbackModalBtn.addEventListener('click', function showFeedbackModal(evt){
	evt.preventDefault();
	feedbackModal.classList.add('feedback_modal_active');
	modalOverlay.classList.add('modal_overlay_active');
	feedbackFormNameInput.focus();
	if(storage){
		feedbackFormEmailInput.value = storage;
	}
});

closeFeedbackModalBtn.addEventListener('click', function closeFeedbackModal(key){
	key.preventDefault();
	feedbackModal.classList.remove('feedback_modal_active');
	modalOverlay.classList.remove('modal_overlay_active');
	feedbackModal.classList.remove('feedback_modal_error');
});

window.addEventListener('keydown', function(key){
	if(key.keyCode === 27) {
		key.preventDefault();
		if(feedbackModal.classList.contains('feedback_modal_active')) {
			feedbackModal.classList.remove('feedback_modal_active');
			modalOverlay.classList.remove('modal_overlay_active');
			feedbackModal.classList.remove('feedback_modal_error');
		}
	}
});

feedbacFormSubmitBtn.addEventListener('click', function(evt){
	if(!feedbackFormNameInput.value || !feedbackFormEmailInput.value || !feedbackFormMessageInput.value){
		evt.preventDefault();
		feedbackModal.classList.remove('feedback_modal_error');
		feedbackModal.offsetWidth = feedbackModal.offsetWidth;
		feedbackModal.classList.add('feedback_modal_error');
	}
	else{
		if(isStorageSupport){
			localStorage.setItem('email', feedbackFormEmailInput.value);
		}
	}
});

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