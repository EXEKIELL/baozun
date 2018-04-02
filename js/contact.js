$(function () {

})
var map = new AMap.Map('map', {
    resizeEnable: true,
    zoom:50,
    center: [113.383958,23.098703]
});
new AMap.Marker({
    map: map,
    position: [113.383958,23.098703],
    icon: 'img/0014_pin-48.png'
});