async function searchHandler(event) {
    event.preventDefault();
  
    const searchTerm = document.querySelector(".searchInput").value.trim();
    
    const response = await fetch('/results', {
      method: 'POST',
      body: JSON.stringify({
        name: searchTerm
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace("/results");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#submit-btn').addEventListener('click', searchHandler);