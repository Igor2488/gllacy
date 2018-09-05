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
function setId(){
	var good = document.getElementsByClassName('goods_item');

	for(var i = 0; i < good.length; i++){
		good[i].id = 'goods_item' + (i + 1);
	}
	var byBtn = document.getElementsByClassName('goods_view_btn');
	for(var i = 0; i < byBtn.length; i++){
		byBtn[i].id = 'goods_view_btn' + (i + 1);
		byBtn[i].addEventListener('click', addGoodToCart);
	}
}
function addGoodToCart(){
	var goodName = document.getElementsByClassName('standart_link');
	var goodPrice = document.getElementsByClassName('goods_price');
	var basket = document.getElementsByClassName('pop-up_basket');

}
setId();
