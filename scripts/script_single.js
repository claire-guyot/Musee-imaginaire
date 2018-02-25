var slideIndex = 1;
var slideNext = 0;
var slidePrev = 0;
var currentImageSelector = "[src='"+sessionStorage.getItem("storageKey_imageFile")+"']";
var currentImage = document.querySelector(currentImageSelector);
//alert(getHiddenCategories(currentImage));
var smalls = document.querySelectorAll(getHiddenCategories(currentImage));

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(0);
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n ;
    showSlides(0);
}


function showSlides(n) {
    // compute some numbers
    var i;
    slideNext = slideIndex + 1;
    slidePrev = slideIndex - 1;

    if (slideIndex > smalls.length) {
	slideIndex = 1;
	slideNext = 2;
	slidePrev = smalls.length;
    }
    if (slideIndex < 1) {
	slideIndex = smalls.length;
	slideNext = 1;
	slidePrev = smalls.length - 1;
    }
    if (slideIndex === 1) {
	slideNext = 2;
	slidePrev = smalls.length;
    }
    if (slideIndex === smalls.length) {
	slideNext = 1;
	slidePrev = smalls.length - 1;
    }

    // hile all thumbnails
    var l_thumbnails = document.getElementsByClassName("demo");
    for (i = 0; i < l_thumbnails.length; i++) {
	l_thumbnails[i].style.display = "none";
	l_thumbnails[i].className = l_thumbnails[i].className.replace(" active", "");
	l_thumbnails[i].className = l_thumbnails[i].className.replace(" visible", "");
    }

    // show current, previous and next among "smalls"
    smalls[slideIndex-1].style.display = "block";
    smalls[slidePrev-1].style.display = "block";
    smalls[slideNext-1].style.display = "block";
    smalls[slideIndex-1].className += " active";
    smalls[slideNext-1].className += " nextVisible";
    smalls[slidePrev-1].className += " prevVisible";

}

// retrieves the hidden categories of the image and
// returns a string formatted as a css selector
function getHiddenCategories(a_imgElement) {
    var l_imageClasses = a_imgElement.getAttribute("class");
    // WARNING: a clean code should check that l_imageClasses is defined
    // use a regular expression matching anynumber of consecutive spaces/tabs
    var l_classesAsList = l_imageClasses.split(/\s+/);

    var l_hiddenCategories = [];
    for(var i_class = 0; i_class < l_classesAsList.length ; i_class++) {
	if(l_classesAsList[i_class].substr(0,2) === "__") {
	    l_hiddenCategories.push("."+l_classesAsList[i_class]);
	}
    }
    return l_hiddenCategories.join(", ");
}
