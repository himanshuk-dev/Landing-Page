
//Global variables
let sections = document.querySelectorAll('section');
const menu = document.getElementsByTagName('ul');

// Helper Functions


// Main functions

// build the navigation menu

function addItem() {

    for (let section of sections) {

        // Create list item under unordered list for navingation bar
        const navItem = document.createElement("li");
        
        // Store name of navigation item
        let itemName = section.getAttribute('data-nav');
        // Store link to navigation item
        let itemLink = section.getAttribute('id');
        navItem.classList.add("nav");
        navItem.innerHTML = `<a href= "#${itemLink}" >${itemName}</a>`;
        menu.appendChild(navItem);
    }
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
