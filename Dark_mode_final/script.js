
/*

const dark = true


document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("dark-mode-button");
    const body = document.querySelector("body");

    button.addEventListener("click", function() {

        body.classList.toggle("dark-mode");
        



    if (button.textContent === "Dark Mode") {
        console.log("Dark mode changes to light mode");
        button.textContent = "Light Mode";
        
        
    } 
    else if (button.textContent === "Light Mode"){
        console.log("Light Mode changes to dark mode");
        button.textContent = "Dark Mode";
        
    }

    });

});*/

document.addEventListener("DOMContentLoaded", function() {
    const colorInput = document.getElementById('color-input');
    
    const body = document.querySelector('body');
    const button = document.getElementById('apply');
  
    colorInput.addEventListener('input', () => {
      const color = colorInput.value;
      
    });
  
    button.addEventListener('click', () => {
      const color = colorInput.value;
      body.style.backgroundColor = color;
      //body.classList.toggle('dark-mode');
    });
  });
