
window.addEventListener("scroll", function(){
    var nav =this.document.getElementById("navbar");
    nav.classList.toggle("sticky",window.scrollY > 0);
  
  });


//========testimonials scroll part: inspiration from ww3schools: https://www.w3schools.com/howto/howto_js_slideshow.asp=============
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// section controls that allow left and right arrows to interact
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) 
    {
      slideIndex = 1;
    }
  if (n < 1) 
    {
      slideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
 
}

//textarea counter
const message = document.getElementById('message');
const counter = document.getElementById('counter');

message.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    counter.innerHTML = `${currentLength}/${maxLength}`;
});

//function that removes the text from the textarea
function earsetext(){
  document.getElementById('message').value="";

}