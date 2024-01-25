

function addingEventListener() {
    const input = document.getElementById('button');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  // Call the addingEventListener function to execute the event listener setup
  addingEventListener();