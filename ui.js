// Here You can type your custom JavaScri
function changelayout() {
    document.getElementById('player').style.position="fixed"
    document.getElementById('player').style.top="10dvh"
    document.getElementById('player').style.width=document.getElementsByTagName("video")[0].style.width
    
    document.getElementById('below').style.top=`${document.getElementById('player').clientHeight+50}px`
    
    console.log("chnaging layout")
    window.addEventListener('resize', function(event){
document.getElementById("player").style.width =document.getElementsByTagName("video")[0].style.width


});
  }
window.onload=()=>{
  setTimeout(changelayout, 2000);
  setTimeout(()=>{
    if(document.getElementById('player').style.position!="fixed"){
      changelayout()
    }
    
  },20000)
// Create the floating action button
const fabButton = document.createElement('div');
fabButton.textContent = '+';
fabButton.classList.add('fab'); // Apply a class for styling

// Apply styles dynamically
fabButton.style.position = 'fixed';
fabButton.style.bottom = '20px';
fabButton.style.right = '20px';
fabButton.style.width = '50px';
fabButton.style.height = '50px';
fabButton.style.backgroundColor = '#2196F3'; // Blue color, you can change this
fabButton.style.color = 'white';
fabButton.style.borderRadius = '50%';
fabButton.style.textAlign = 'center';
fabButton.style.lineHeight = '50px';
fabButton.style.cursor = 'pointer';

// Create the context menu
const contextMenu = document.createElement('div');
contextMenu.classList.add('context-menu'); // Apply a class for styling

// Apply styles dynamically
contextMenu.style.display = 'none';
contextMenu.style.position = 'fixed';
contextMenu.style.bottom = '60px'; // Adjust the distance from the button
contextMenu.style.right = '0';
contextMenu.style.width = '120px';
contextMenu.style.color = 'white';
contextMenu.style.backgroundColor = 'rgb(15,15,15)';
contextMenu.style.border = '1px solid #ccc';
contextMenu.style.borderRadius = '4px';
contextMenu.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
contextMenu.style.zIndex = '9999';

// Function to create a context menu item
function createContextMenuItem(id,label, clickHandler) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('context-menu-item');
    menuItem.id=id
    menuItem.textContent = label;
    menuItem.style.padding = '8px';
    menuItem.style.cursor = 'pointer';

    // Attach click event handler
    menuItem.addEventListener('click', clickHandler);

    return menuItem;
}

// Create and append context menu items

contextMenu.appendChild(createContextMenuItem(id="ee652de",'Turn off comments', function() {
  
document.getElementById("comments").style.display=document.getElementById("comments").style.display=="none"  ?"block":"none"
document.getElementById("comments").style.display=="none"?document.getElementById("ee652de").innerText="Turn On comments":document.getElementById("ee652de").innerText="Turn off comments"
}));

contextMenu.appendChild(createContextMenuItem("sasa342323rr",'changelayout', function() {
    changelayout()
}));

contextMenu.appendChild(createContextMenuItem("dsd2222342ee",'...', function() {
    alert('Option 3 Clicked!');
}));

// Append the button and context menu to the body
document.body.appendChild(fabButton);
document.body.appendChild(contextMenu);

// Attach event handlers to show/hide context menu
fabButton.addEventListener('click', function() {
    contextMenu.style.display = (contextMenu.style.display === 'none' || contextMenu.style.display === '') ? 'block' : 'none';
});

document.addEventListener('click', function(event) {
    if (!fabButton.contains(event.target) && !contextMenu.contains(event.target)) {
        contextMenu.style.display = 'none';
    }
});
// Function to handle changes in the DOM
function handleMutation(mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const adSkipButton = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
            if (adSkipButton) {
                adSkipButton.click();
                observer.disconnect(); // Stop observing once the button is found and clicked
            }
        }
    }
}

// Create a MutationObserver
const observer = new MutationObserver(handleMutation);

// Start observing changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });

// Optional: Set a timeout to stop observing after a certain period
setTimeout(() => {
    observer.disconnect();
}, 60000); // Stop observing after 60 seconds

  
}

window.changelayout=changelayout
