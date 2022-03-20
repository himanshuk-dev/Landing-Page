
//Global variables
const sections = document.querySelectorAll('section');
const menu = document.getElementsByTagName('ul')[0];


// build the navigation menu

function addItem() {

    for (section of sections) {

        // Create list item under unordered list for navingation bar
        const navItem = document.createElement("li");
        
        // Store name of navigation item
        let itemName = section.getAttribute('data-nav');
        // Store link to navigation item
        let itemLink = section.getAttribute('id');
        menu.classList.add("nav");
        navItem.innerHTML = `<a href= "#${itemLink}">${itemName}</a>`;
        menu.appendChild(navItem);
    }
}

addItem();


// Check the section in view

function sectionInView () {
    const position = element.getBoundingClientRect();
    return (position.top <= 150 && position.bottom >= 150);
}

// Set sections as active
function activeClass() {
    for (section of sections) {
        if (sectionInView(section)) {

            // Add "active-class" to section in view port
            section.classList.add("active-class");
            
        } else {

            // Remove "active-class" from section not in view port
            section.classList.remove("active-class");
        }
    }
}

document.addEventListener("scroll", function() {
    activeClass();
  });

// Scroll to anchor ID using scrollTO event

