//Load and view large image
/* Hazera Ferdowsi : ID: 301168815 */
var urlParams = new URLSearchParams(window.location.search);
var imageUrl = "";
var imageName = 'phone121.png';
if (urlParams.has('img')) {
    imageName = urlParams.get('img');
}
imageUrl = "img/" + imageName;
var imgDetailsImage = document.getElementById('detailsImage');
imgDetailsImage.src = imageUrl;
