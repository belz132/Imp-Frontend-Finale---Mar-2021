function titleHighlight() {
    document.getElementById('title').style.color = 'goldenrod';
}

function titleNonHighlight() {
    document.getElementById('title').style.color = '';
}

function bars() {
    document.getElementById('bars').style.display = 'none';
    document.getElementById('times').style.display = 'inherit';
    document.getElementById('headerCol2').style.display = 'flex';
    document.getElementById('headerCol3').style.display = 'flex';
    document.getElementById('headerCol4').style.display = 'flex';
}

function times() {
    document.getElementById('times').style.display = 'none';
    document.getElementById('bars').style.display = 'inherit';
    document.getElementById('headerCol2').style.display = 'none';
    document.getElementById('headerCol3').style.display = 'none';
    document.getElementById('headerCol4').style.display = 'none';
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}  

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}

//-----contact hide and show
function contactHide() {
    document.getElementById('contact').style.display = 'none';
}

function displayContact() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('studio').style.display = 'none';
    document.getElementById('works').style.display = 'none';
    document.getElementById('contact').style.display = 'inherit'

    // var h1 = document.getElementsById('contact');
    // var att = document.createAttribute("class");
    // att.value = "democlass";
    // h1.setAttributeNode(att);
    // document.getElementById('contactHead').setAttribute('data-aos', 'fade-up');
}