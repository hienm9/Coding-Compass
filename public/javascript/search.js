async function searchHandler(event) {
  event.preventDefault();
  
  const query = document.querySelector(".searchInput").value.trim();

  const response = await fetch('/results/' + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    document.location.replace("/results/" + query);
  } else {
    alert(response.statusText);
  }
}
  
document.querySelector('#search-form').addEventListener('submit', searchHandler);