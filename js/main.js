// Start Section 1
let ourImage = document.querySelector(".choices-image");

function showImage() {
  ourImage.style.visibility = "visible";
  ourImage.style.opacity = "1";
}
document
  .querySelector(".section1-btn")
  .addEventListener("mouseenter", hideImage);

function hideImage() {
  ourImage.style.visibility = "hidden";
  ourImage.style.opacity = "0";
}
document.querySelector(".section1-btn").addEventListener("mouseout", showImage);
// End Section 1

// Start Slider-Images Section ----------------------------------------------------

// #-1 The Environement (collection of variables)

// Collecting Informations About HTML Elements
// Based on these informations we will build our slider-images

// Get Slider Items (Images) using Array.from() method [ES6 Feature]

var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img ")
);

// Get Number of Slides (Items)

var slidesCount = sliderImages.length;

// Set Current Slide ( The index of the first image where the slider will start )

var currentSlide = 1;

// Slide Number Element

var slideNumberElement = document.querySelector("#slide-number");

// Previous and Next Buttons

var prevButton = document.querySelector("#prev");
var nextButton = document.querySelector("#next");

// Create The Main ul Element

var paginationElement = document.createElement("ul");

// Set id On Created ul Elements

paginationElement.setAttribute("id", "pagination-ul");

// Create List Items (li) Based On Slides Count (number of images)

for (var i = 1; i <= slidesCount; i++) {
  // Create li
  var paginationItem = document.createElement("li");
  // Set Custom Attribute
  paginationItem.setAttribute("data-index", "i");
  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));
  // Add Item To Main Parent ul
  paginationElement.appendChild(paginationItem);
}

// Add The Created ul Element To The Page

document.querySelector("#indicators").appendChild(paginationElement);

// Get The New Created ul

var paginationCreatedUl = document.querySelector("#pagination-ul");

// #-2 Events

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Get pagination Items (Images) using Array.from() method [ES6 Feature]

var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Trigger The Checker Function
theChecker();

// #-3 Functions

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    //  Do Nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    //  Do Nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  // we want to write the number of the current slide in the box above
  slideNumberElement.textContent =
    "slide #" + currentSlide + " of " + slidesCount;

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");
  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check If Current Slide Is The First
  if (currentSlide == 1) {
    // Add Disabled Class On Previous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove("disabled");
  }
  // Check If Current Slide Is The Last
  if (currentSlide == slidesCount) {
    // Add Disabled Class On Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images and Pagination Bullets

function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function(img) {
    img.classList.remove("active");
  });
  // Loop Through Pagination Bullets
  paginationBullets.forEach(function(bullet) {
    bullet.classList.remove("active");
  });
}

// End Slider-Images Section -----------------------------------------------------------------
