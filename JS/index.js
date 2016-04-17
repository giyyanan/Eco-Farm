var  initialize = function ()
{
	var mapCanvas = document.getElementById("contact_map");
	var mapOptions = {
		center: new google.maps.LatLng(11.02,76.96), zoom: 10
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}