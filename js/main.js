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
	}),
	map.setOptions({styles: styles});
}

var contactsBtn = document.querySelector('.contacts_btn');
var closeFeedbackModalBtn = document.querySelector('.close_btn');
var feedbackModal = document.querySelector('.feedback_modal');
var modalOverlay = document.querySelector('.modal_overlay');
var popUpLogin = document.querySelector('.pop-up_login');
var userNavLinkLogin = document.querySelector('.user_nav_link_login');

var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem("userNavLinkLogin");
} catch (err) {
	isStorageSupport = false;
}

contactsBtn.addEventListener('click', showFeedbackModal);
closeFeedbackModalBtn.addEventListener('click', closeFeedbackModal);
userNavLinkLogin.addEventListener('mouseover', function(){
	var loginEmailInput = popUpLogin.querySelector('#login_email_input');
	loginEmailInput.focus();
})
// userNavLinkLogin.addEventListener('focus', function(){
// 	var loginEmailInput = document.querySelector('#login_email_input');
// 	loginEmailInput.focus();
// })

window.addEventListener('keydown', function(key){
	if(key.keyCode === 27) {
		key.preventDefault();
		if(feedbackModal.classList.contains('feedback_modal_active')) {
			feedbackModal.classList.remove('feedback_modal_active');
			modalOverlay.classList.remove('modal_overlay_active');
		}
	}
})

function showFeedbackModal(evt){
	evt.preventDefault();
	feedbackModal.classList.add('feedback_modal_active');
	modalOverlay.classList.add('modal_overlay_active')
}

function closeFeedbackModal(key){
	feedbackModal.classList.remove('feedback_modal_active');
	modalOverlay.classList.remove('modal_overlay_active');
}