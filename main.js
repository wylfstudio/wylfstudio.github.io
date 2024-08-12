// Old mutation event usage:  
target.addEventListener('DOMNodeInserted',event => doSomething(event.target));

// Replacement mutation observer code:  
const observer = new MutationObserver(mutationList =>  
  mutationList.filter(m => m.type === 'childList').forEach(m => {  
    m.addedNodes.forEach(
        {
            // Select the text element to animate
            const textElement = document.querySelector('.logo');
        
            // Add an event listener to the window for the scroll event
            window.addEventListener('scroll', () => {
                // Get the current scroll position
                const scrollPosition = window.scrollY;
        
                // Calculate the new font size based on the scroll position
                const newFontSize = Math.max(20, 40 - scrollPosition / 10); // Adjust the values as needed
        
                // Apply the new font size to the text element
                textElement.style.fontSize = newFontSize + 'px';
            });
        }        
    );  
  }));  
observer.observe(target,{childList: true, subtree: true});  


