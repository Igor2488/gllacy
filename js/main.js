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
contactsBtn.addEventListener('click', showFeedbackModal);
closeFeedbackModalBtn.addEventListener('click', closeFeedbackModal);

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