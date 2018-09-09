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

var contactsBtn = document.getElementById('contacts_btn');
contactsBtn.addEventListener('click', showFeedbackModal);
var closeFeedbackModalBtn = document.getElementById('close_btn');
closeFeedbackModalBtn.addEventListener('click', closeFeedbackModal);
var escKeyCode = 27;
document.addEventListener('keydown', closeFeedbackModal)
var feedbackModal = document.getElementById('feedback_modal');
var modalOverlay = document.getElementById('modal_overlay');

function showFeedbackModal(){
	feedbackModal.classList.add('feedback_modal_active');
	modalOverlay.classList.add('modal_overlay_active')
}

function closeFeedbackModal(key){
	feedbackModal.classList.remove('feedback_modal_active');
	modalOverlay.classList.remove('modal_overlay_active');
	if(key.keyCode === escKeyCode) {
    feedbackModal.classList.remove('feedback_modal_active');
		modalOverlay.classList.remove('modal_overlay_active');
  }
}