const listDiv = document.querySelector('.list'); // reference to basically the rest of the two buttons and list all contained in a div.
const descriptionP = document.querySelector('p.description'); // reference to the p element with the class name description. 

// Input fields
const addItemInput = document.querySelector('input.addItemInput'); 
const descriptionInput = document.querySelector('input.description'); 

// Buttons
const toggleListButton = document.getElementById('toggleList'); 
const descriptionButton = document.querySelector('button.description'); 
const addItemButton = document.querySelector('button.addItemButton');  
const removeItemButton = document.querySelector('button.removeItemButton');  



// Hide/Show button
toggleListButton.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleListButton.textContent = 'Hide list';
    listDiv.style.display = 'block'; 
  } else {
    toggleListButton.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

// Change Description Button 
  descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';                          
});

// Add Item to list 
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]; // Make sure to use [0] since this returns a collection 
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li); 
  addItemInput.value = ''; 
});

// Remove Item from list
removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; // Make sure to use [0] since this returns a collection 
    let li = document.querySelector('li:last-child');
    ul.removeChild(li); 
  });
  
  
  
  
  
  
  
  
  