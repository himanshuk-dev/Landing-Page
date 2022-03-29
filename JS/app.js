
//Global variables
const sections = document.querySelectorAll('section');
const menu = document.getElementsByTagName('ul')[0];
// const navLink = menu.getElementsByTagName('li');

// console.log("list of navlink:",navLink);

// build the navigation menu

function addItem() {

    for (section of sections) {

        // Create list item under unordered list for navingation bar
        const navItem = document.createElement("li");      
        
        // // Store name of navigation item
        let itemName = section.getAttribute('data-nav');
        
        // // Store link to navigation item
        let itemLink = section.getAttribute('id');
        menu.classList.add("nav");
        navItem.innerHTML = `<a href= "#${itemLink}" class=section >${itemName}</a>`;
        menu.appendChild(navItem);
        scroll(navItem,section);
        
    }
}

addItem();

// Active nav links
// navLink.classList.add("navActive");

// Check the section in view

function sectionInView (element) {
    const position = element.getBoundingClientRect();
    return (position.top <= 150 && position.bottom >= 150);
}

// Add active state to section and nav element
function activeClass() {

    for (section of sections) {
        if (sectionInView(section)) {
            // Add "active-class" to section in view port
            section.classList.add("active-class");
            document.querySelector(`a[href='#${section.id}']`).classList.add("active");
        } else {

            // Remove "active-class" from section not in view port
            section.classList.remove("active-class");
            document.querySelector(`a[href='#${section.id}']`).classList.remove("active");
        }
    }
}

// Function call to show active section in view
document.addEventListener("scroll", function() {
    activeClass();
  });

// Smooth scroll
function scroll(clickedElement, scrolledElement) {
  clickedElement.addEventListener("click", function (e) {
    e.preventDefault();
    scrolledElement.scrollIntoView({ behavior: "smooth" });
  });
}

// Scroll to top button

//Get the button:
button = document.getElementById("scrollbutton");

// Show the button 30px down from top of viewport
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

//Scroll function
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
