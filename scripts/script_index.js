var checkSecret = document.querySelector('#secret');


if (checkSecret !== null) {
    checkSecret.addEventListener('click', function() {
	    toggleImageDisplay("essai");

	});
}

var checkImaginaire = document.querySelector('#imaginaire');


if (checkImaginaire !== null) {
    checkImaginaire.addEventListener('click', function() {
	    toggleImageDisplay("imaginaire");

	});
}

var checkAvenir = document.querySelector('#avenir');


if (checkAvenir !== null) {
    checkAvenir.addEventListener('click', function() {
	    toggleImageDisplay("avenir");
	});
}

var checkEnfance = document.querySelector('#enfance');


if (checkEnfance !== null) {
    checkEnfance.addEventListener('click', function() {
	    toggleImageDisplay("enfance");
	});
}

var checkCiel = document.querySelector('#ciel');


if (checkCiel !== null) {
    checkCiel.addEventListener('click', function() {
	    toggleImageDisplay("ciel");
	});
}

var checkHistoire = document.querySelector('#histoire');


if (checkHistoire !== null) {
    checkHistoire.addEventListener('click', function() {
	    toggleImageDisplay("histoire");
	});
}

var checkMonde = document.querySelector('#monde');


if (checkMonde !== null) {
    checkMonde.addEventListener('click', function() {
	    toggleImageDisplay("monde");
	});
}

var checkAventure = document.querySelector('#aventure');


if (checkAventure !== null) {
    checkAventure.addEventListener('click', function() {
	    toggleImageDisplay("aventure");
	});
}

var checkEtrange = document.querySelector('#etrange');


if (checkEtrange !== null) {
    checkEtrange.addEventListener('click', function() {
	    toggleImageDisplay("etrange");
	});
}

var checkVrai = document.querySelector('#vrai');


if (checkVrai !== null) {
    checkVrai.addEventListener('click', function() {
	    toggleImageDisplay("vrai");
	});
}



/************************/

function toggleImageDisplay(a_category) {
    // build the element selector with a_category
    var l_selector = "img:not(."+a_category+").index_thumbnail" ;
    // select all the matching elements
    var l_imagesToHide = document.querySelectorAll(l_selector);
    //alert(l_selector);
    //alert(l_imagesToHide.length);
    // if there is at least one, hide ot display (toggle) them
    if (l_imagesToHide.length > 0) {
	if (l_imagesToHide[0].classList) {
	    var i = 0;
	    for (i = 0; i < l_imagesToHide.length; i++) {
		l_imagesToHide[i].classList.toggle("hidden_" + a_category);
	    }
	}
    }
}



/**************************************/
