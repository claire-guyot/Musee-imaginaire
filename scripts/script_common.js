// this function displays the corresponding image in the
// 'single_image' page
// 
// 1) it stores the src attribute (which acts as a key) in
// sessionStorage
// 2) then loads the "single_image" page
// 3) the in the "single_image" page, dedicated scripts get 
// find the corresponding <img> tag, using the "src" filename as a
// key, then extract the legend and "hidden categories" and adjust the
// display


function showAsSingleImage(a_image, a_same_window = false) {
    // should be called on an <img> element
    // get and store the "src" atttribute of a_image
    var l_imageFile = a_image.getAttribute("src");
    sessionStorage.setItem("storageKey_imageFile", l_imageFile);
    // finaly, open the target window
    if(a_same_window) {
	location.reload();
    }
    else {
	window.open("single_image.html");
    }
}
