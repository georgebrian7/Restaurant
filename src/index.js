
import "./styles.css";

import {main,menu,about} from "./function.js"


function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
}

// Function to initialize event listeners for tab switching
function setupTabSwitching() {
    document.getElementById('home').addEventListener('click', () => {
        clearContent();
        main();
    });

    document.getElementById('Menu').addEventListener('click', () => {
        clearContent();
        menu();
    });

    document.getElementById('About').addEventListener('click', () => {
        clearContent();
        about();
    });
}

// Initialize the page by loading the home tab by default
document.addEventListener('DOMContentLoaded', () => {
    main(); 
    setupTabSwitching(); 
});






