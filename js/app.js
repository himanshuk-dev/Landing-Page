// Manipulating the DOM


/**
 * Global Variables
 */
let navbarList = document.querySelector("#navbar_list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
*/

// build the nav
window.addEventListener('load', buildNavbar())


// Build menu
function buildNavbar() {
	sections.forEach((element)=>{
	    let listItem = document.createElement("li");
	    listItem.classList.add("navbar_list_item");
    	let sectionName = element.getAttribute("data-nav");
    	let currentSectionId = element.getAttribute("id");
        listItem.innerHTML = `<a href="#${currentSectionId}" class="nav_hyperlink">${sectionName}</a>`;
        navbarList.appendChild(listItem);
    });
}
